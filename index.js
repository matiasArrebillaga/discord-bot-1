const fs = require('node:fs')
const path = require('node:path')
const { Client, GatewayIntentBits, Collection } = require('discord.js')
require('dotenv').config()
const deployCommands = require('./deploy-commands')
const createEmbed = require('./embed')

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

client.commands = new Collection()
const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command)
}

client.on('ready', (bot) => {
  console.log(`Logged in as ${bot.user.username}!`)
  client.user.setActivity('tomando mates')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return

  const command = interaction.client.commands.get(interaction.commandName)

  if (!command) return

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
  }
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return
  await interaction.reply(`${interaction.user.username}, juga con esta de nuevo si queres pete`)
})

client.on('messageCreate', async interaction => {
  if (interaction.content === 'm!start') {
    deployCommands(interaction)
  } else if (interaction.content === 'm!help') {
    const embed = createEmbed()
    await interaction.reply({ embeds: [embed], files: ['./images/mate.jpg', './images/dragonite.jpg', './images/shinji.jpg'] })
  }
})

client.login(process.env.TOKEN)

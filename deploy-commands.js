
module.exports = (interaction) => {
  const fs = require('node:fs')
  const path = require('node:path')
  const { REST, Routes } = require('discord.js')
  require('dotenv').config()

  const commands = []
  const commandsPath = path.join(__dirname, 'commands')
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    commands.push(command.data.toJSON())
  }

  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

  rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, interaction.guildId), { body: commands })
    .then(async (data) => {
      console.log(`Successfully deploy of ${data.length} commands`)
      await interaction.reply(`Listo ${interaction.user.username}! ya se pueden usar los comandos con /`)
    })
    .catch(console.error)
}

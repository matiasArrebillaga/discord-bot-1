const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mate')
    .setDescription('Pedis un mate'),
  async execute (interaction) {
    setTimeout(() => {
      interaction.channel.send('https://tenor.com/view/12753621')
    }, 1000)
    await interaction.reply('Toma un matecito pa 🧉   ')
  }
}

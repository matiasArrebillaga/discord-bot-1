const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mate')
    .setDescription('Pedis un mate'),
  async execute (interaction) {
    await interaction.reply('https://tenor.com/view/tea-mate-gif-12753621\nToma un matecito pa')
  }
}

const { SlashCommandBuilder } = require('discord.js')
const mate = 'https://tenor.com/view/tea-mate-gif-12753621'

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mate')
    .setDescription('Pedis un mate'),
  async execute (interaction) {
    await interaction.reply(`Toma un matecito pa\n${mate}`)
  }
}

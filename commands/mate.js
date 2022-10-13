const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mate')
    .setDescription('Pedis un mate'),
  async execute (interaction) {
    await interaction.reply('Tomate un mate pa')
  }
}

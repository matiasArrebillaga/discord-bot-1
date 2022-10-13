const { SlashCommandBuilder } = require('discord.js')
const fetch = require('node-fetch')
const url = 'http://api.giphy.com/v1/gifs/search?q='

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gif')
    .setDescription('A random gif with ur word!')
    .addStringOption(option =>
      option.setName('word')
        .setDescription('Que queres buscar pa?')
        .setRequired(true)
    ),
  async execute (interaction) {
    const gifWord = interaction.options.getString('word')
    const response = await fetch(`${url}${gifWord}&api_key=${process.env.GIF_KEY}&lang=es`)
    const json = await response.json()
    await interaction.reply(json.data[Math.floor(Math.random() * json.data.length)].url)
  }
}

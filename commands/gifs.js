const { SlashCommandBuilder } = require('discord.js')
const Tenor = require('tenorjs').client({
  Key: process.env.GIF_KEY, // https://developers.google.com/tenor/guides/quickstart
  Filter: 'off', // "off", "low", "medium", "high", not case sensitive
  Locale: 'en_US', // Your locale here, case-sensitivity depends on input
  MediaFilter: 'minimal', // either minimal or basic, not case sensitive
  DateFormat: 'D/MM/YYYY - H:mm:ss A' // Change this accordingly
})

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

    Tenor.Search.Query(gifWord, '1').then(Results => {
      Results.forEach(async Post => {
        await interaction.reply(Post.url)
      })
    }).catch(console.error)
  }
}

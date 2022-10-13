const { SlashCommandBuilder } = require('discord.js')
const respuestas = {
  0: 'Si papa.',
  1: 'Probablemente genio.',
  2: 'Si sos de pigmentacion negra podria ser complicado.',
  3: 'Tal vez...',
  4: 'Ni en pedo.',
  5: 'Si, dale, segui queriendo.',
  6: 'Depende de si Messi quiere.',
  7: 'Quizas, si depende del ogro cagaste.',
  8: 'Mientras el juank siga errando goles seguramente, asi que si.',
  9: 'Me mataste pa, no soy de aca.',
  10: 'Preguntale al diego, que me rompes las bolas a mi.',
  11: 'No, al igual que Central ganando un campeonato cagaste',
  12: 'Esta mas al horno que patronato',
  13: 'Jajajajaja',
  14: 'Tu mama',
  15: 'La mama del juank'
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('question')
    .setDescription('Replies u question with a really cool answer!')
    .addStringOption(option =>
      option.setName('input')
        .setDescription('Enter your question here')
        .setRequired(true)),
  async execute (interaction) {
    const pregunta = interaction.options.getString('input')
    await interaction.reply(` Pregunta: ${pregunta}\nRespuesta: ${respuestas[Math.floor(Math.random() * 16)]}`)
  }
}

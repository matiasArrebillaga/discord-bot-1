const { SlashCommandBuilder } = require('discord.js')
const mate = {
  0 = 'https://tenor.com/view/tea-mate-gif-12753621'
  1 = 'https://media.tenor.com/0F1IPiIH2IAAAAAM/chimavara-capivara.gif'
  2 = 'https://media.tenor.com/9dcZbORyqKcAAAAC/dicapio-mate-great-gatsby-mate.gif'
  3 = 'https://i.pinimg.com/originals/97/67/01/976701e0ec872990cea93b1c44aaa3cf.gif'
}
module.exports = {
  data: new SlashCommandBuilder()
    .setName('mate')
    .setDescription('Pedis un mate'),
  async execute (interaction) {
    setTimeout(() => {
      interaction.channel.send(mate[Math.floor(Math.random(3)* cantidad)])
    }, 1000)
    await interaction.reply('Toma un matecito pa 🧉   ')
  }
}

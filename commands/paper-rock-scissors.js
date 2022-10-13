const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

const computerChooise = () => {
  const options = {
    0: '✋',
    1: '👊',
    2: '✌️'
  }
  return options[Math.floor(Math.random() * 3)]
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('paper-rock-scissors')
    .setDescription('Challenge me!')
    .addStringOption(option =>
      option.setName('chooise')
        .setDescription('Pick ur weapon')
        .setRequired(true)
        .addChoices(
          { name: '✋', value: '✋' },
          { name: '👊', value: '👊' },
          { name: '✌️', value: '✌️' }
        )
    ),
  async execute (interaction) {
    const computer = computerChooise()
    const userChooise = interaction.options.getString('chooise')

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('play-again')
          .setLabel('Play again!')
          .setStyle(ButtonStyle.Primary)
      )

    if (userChooise === computer) {
      return await interaction.reply({ content: `Computers chooise: ${computer}\nUser chooise: ${userChooise}\nTie!`, components: [row] })
    } else if (userChooise === '✋') {
      if (computer === '✌️') {
        return await interaction.reply({ content: `Computers chooise: ${computer}\nUser chooise: ${userChooise}\nComputer wins!`, components: [row] })
      } else {
        return await interaction.reply({ content: `Computers chooise: ${computer}\nUser chooise: ${userChooise}\nUser wins!`, components: [row] })
      }
    } else if (userChooise === '👊') {
      if (computer === '✌️') {
        return await interaction.reply({ content: `Computers chooise: ${computer}\nUser chooise: ${userChooise}\nUser wins!`, components: [row] })
      } else {
        return await interaction.reply({ content: `Computers chooise: ${computer}\nUser chooise: ${userChooise}\nComputer wins!`, components: [row] })
      }
    } else if (userChooise === '✌️') {
      if (computer === '👊') {
        return await interaction.reply({ content: `Computers chooise: ${computer}\nUser chooise: ${userChooise}\nComputer wins!`, components: [row] })
      } else {
        return await interaction.reply({ content: `Computers chooise: ${computer}\nUser chooise: ${userChooise}\nUser wins!`, components: [row] })
      }
    }
  }
}

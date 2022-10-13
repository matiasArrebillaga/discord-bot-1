const { EmbedBuilder } = require('discord.js')

module.exports = () => {
  return new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Como activar mis comandos')
    .setAuthor({ name: 'Matecito bot', iconURL: 'attachment://mate.jpg', url: 'https://discord.js.org' })
    .setDescription('"m!start"')
    .setThumbnail('attachment://shinji.jpg')
    .addFields({ name: 'Maradona o Pele?', value: 'El diego pegado a la linea', inline: true })
    .setImage('attachment://dragonite.jpg')
    .setTimestamp()
}

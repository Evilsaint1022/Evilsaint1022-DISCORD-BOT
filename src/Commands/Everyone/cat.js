const axios = require('axios');

const catApiKey = process.env.CAT_API_KEY;

module.exports = {
  data: {
    name: 'cat',
    description: 'Get a random cat image from The Cat API',
  },
  async execute(interaction) {
    const { user, channel, guild } = interaction;
    const timestamp = new Date().toLocaleTimeString();
    const guildIconUrl = guild.iconURL({ dynamic: true, format: 'png' }) || '';

    const { data } = await axios.get('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': catApiKey,
      },
    });

    const catImageUrl = data[0].url;
    const messageContent = `Here's a random cat for you! 😺\n${catImageUrl}`;

    await interaction.reply({ content: messageContent });

      // Console Logs
  console.log(`[${new Date().toLocaleTimeString()}] ${interaction.user.username} used the cat command.`)
  },
};


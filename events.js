const client = require('./bot.js');

function handleEvent(event, param1, param2){
    try {
        client.events[event].forEach(e => e(param1, param2));
    } catch (e) {
        client.logger.error(`Error in ${event}`);
        client.logger.error(e);
    }
}

function handleEvent(event, param1){
    try {
        client.events[event].forEach(e => e(param1));
    } catch (e) {
        client.logger.error(`Error in ${event}`);
        client.logger.error(e);
    }
}

client.on("channelCreate", (channel) => handleEvent("channelCreate", channel));
client.on("channelDelete", (channel) => handleEvent("channelDelete", channel));
client.on("channelPinsUpdate", (channel, time) => handleEvent("channelPinsUpdate", channel, time));
client.on("clientUserGuildSettingsUpdate", (settings) => handleEvent("clientUserGuildSettingsUpdate", settings));
client.on("clientUserSettingsUpdate", (settins) => handleEvent("clientUserSettingsUpdate", settins));
client.on("emojiCreate", (emoji) => handleEvent("emojiCreate", emoji));
client.on("emojiDelete", (emoji) => handleEvent("emojiDelete", emoji));
client.on("emojiUpdate", (emoji) => handleEvent("emojiUpdate", emoji));
client.on("messageDelete", message => handleEvent("messageDelete", message));
client.on("messageUpdate", (oldM, newM) => handleEvent("messageUpdate", oldM, newM));
client.on("guildBanAdd", (guild, user) => handleEvent("guildBanAdd", guild, user));
client.on("guildDelete", (guild) => handleEvent("guildDelete", guild));
client.on("guildMemberAvailable", (member) => handleEvent("guildMemberAvailable", member));
client.on("guildMemberRemove", (member) => handleEvent("guildMemberRemove", member));
client.on("guildMemberSpeaking", channel => handleEvent("guildMemberSpeaking",channel));
client.on("guildBanRemove", (guild, user) => handleEvent("guildBanRemove", guild, user));
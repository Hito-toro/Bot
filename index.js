const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Comand: *help");
    console.log("Connected");
});
bot.login("NDYyNzE3OTk3OTc1NjAxMTUy.Dhl7Rg.88YX_4zP9nXJTFKzmqpJHFAdpZk");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }
    if (message.content === "salut"){
        message.reply("Bien le bonjour :)");
        console.log("Commande Salut effectuée");
    }
    if (message.content === "goat"){
        message.reply("https://media.giphy.com/media/MYEgNY8dIxPpe/giphy.gif");
        console.log("summoned a goat!");
    }  
});
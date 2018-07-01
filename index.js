const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Comand: *help");
    console.log("Connected");
});
bot.login("NDYyNzE3OTk3OTc1NjAxMTUy.Dhl7Rg.88YX_4zP9nXJTFKzmqpJHFAdpZk");

bot.on('message', message => {
	// "*help" -> Affiche la liste des commandes
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -\\*help\t Affiche la liste des commandes\n-salut\t Vous souhaite la bienvenue\n-goat\t Affiche le gif d'une super chevre\n-\\*licorne\t Affiche la meilleure licorne du monde");
    }
    // "salut" -> Affiche "Bien le bonjour ! :)"
    else if (message.content === "salut"){
        message.reply("Bien le bonjour ! :)");
        console.log("Commande Salut effectuée.");
    }
    // "goat" -> Affiche un gif d'une chevre
    else if (message.content === "goat"){
        message.reply("https://media.giphy.com/media/MYEgNY8dIxPpe/giphy.gif");
        console.log("Summoned a goat !");
    }
    // "*licorne" -> Affiche l'image d'une licorne
    else if (message.content === prefix + "licorne")
    {
    	message.reply("https://www.google.fr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiVydqd6P3bAhXJthQKHVMuCjMQjRx6BAgBEAU&url=http%3A%2F%2Fthecooline.tumblr.com%2F&psig=AOvVaw3ab8CMizbCiWWSjzdDq5NE&ust=1530531475482160");
    	console.log("La meilleure licorne du monde à été affichée.")
    }
});
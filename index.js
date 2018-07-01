const Discord 	= require('discord.js');
const settings 	= require("settings.json");
const fs 		= require("fs");
const bot 		= new Discord.Client();

//----------↑↑ Constante ↑↑----------

var prefix 		= settings.prefix

//----------↑↑ Variable ↑↑----------
//----------↓↓   Code   ↓↓----------

bot.login(settings.login);

// S'execute lors de la mise en route du bot
bot.on('ready', function() {
	// Modifie le jeu du bot
    bot.user.setGame("Comand: *help");
    console.log("Connected");
});

// S'execute lorsque le bot recoit un message (un message sur le channel)
bot.on('message', message => {
	// Ignore les autres bots (pas de botception !)
	if(message.author.bot) return;
	// Prefixes obligatoire pour les commandes du bot
	if(message.content[0] !== prefix) return;
	// Puis on retire le prefixe du message
	message.content = message.content.substring(1);

	// Et enfin on decoupe notre message
	var commande = message.content.split(" ")[0];					// On decoupe selon les espaces puis on récupère le premier mot (la commande donc)
	var parametre = message.content.split(" ").slice(1).tostring(); // On decoupe selon les espaces puis on recupère tous les autres mots sous forme de chaine de caractères

	switch(commande) 
	{
		// "help" -> Affiche la liste des commandes
		case 'help' :
			message.channel.sendMessage("Liste des commandes:\n -\\*help\t Affiche la liste des commandes\n-salut\t Vous souhaite la bienvenue\n-goat\t Affiche le gif d'une super chevre\n-\\*licorne\t Affiche la meilleure licorne du monde");
		break;
		// "salut" -> Affiche "Bien le bonjour ! :)"
		case 'salut' :
			message.reply("Bien le bonjour ! :)");
        	console.log("Commande Salut effectuée.");
        break;
        // "goat" -> Affiche un gif d'une chevre
        case "goat" :
        	message.reply("https://media.giphy.com/media/MYEgNY8dIxPpe/giphy.gif");
        	console.log("Summoned a goat !");
        break;
        // "licorne" -> Affiche l'image d'une licorne
        case "licorne" :
        	message.channel.send("https://cdn.discordapp.com/attachments/282472433313644544/462945595955478528/licorne.jpg");
    		console.log("La meilleure licorne du monde à été affichée.");
    	break;
	}
});

//function help() {
	//message.channel.sendMessage("Liste des commandes:\n");
//}


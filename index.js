const Discord 	= require('discord.js');
const settings 	= require('./settings.json');
const fs 		= require("fs");
const bot 		= new Discord.Client();
const responses	= ["Hawk-sama vous a repondu bandes de porcs !", "Oh! Quelqu'un appelle le Capitaines des restes !",
					"Ne prononce pas mon nom mortel ! Ou tu finiras dans mon estomac ", "Je mange vos restes, fiche le camp cochon...",
					"Pas touche bandes de porcs !", "Je vais me faire exploser le bide !", "Gruik! Faites tourner !",
					"Ne penses pas que je vais partager hé hé."];

//----------↑↑ Constantes ↑↑----------

var prefix 		= settings.prefix;
var rand		= 0;

//----------↑↑ Variables ↑↑----------
//----------↓↓    Code   ↓↓----------

bot.login(settings.login);

// S'execute lors de la mise en route du bot
bot.on('ready', function() {
	// Modifie le jeu du bot
    bot.user.setActivity("Command: "+prefix+"help");
    console.log("Connected");
});

// S'execute lorsque le bot recoit un message (un message sur le channel)
bot.on('message', message => {
	// Ignore les autres bots (pas de botception !)
	if(message.author.bot) return;
	// Prefixes obligatoire pour les commandes du bot
	if(!message.content.startsWith(prefix)) return;
	// Puis on retire le prefixe du message
	message.content = message.content.substring(prefix.length);

	// Et enfin on decoupe notre message
	var commande = message.content.split(" ")[0];						// On decoupe selon les espaces puis on récupère le premier mot (la commande donc)
	var parametre = message.content.split(" ").slice(1).toString(); 	// On decoupe selon les espaces puis on recupère tous les autres mots sous forme de chaine de caractères

	switch(commande) 
	{
		// "help" -> Affiche la liste des commandes
		case 'help' :
			help(message);
		break;
		// "salut" -> Affiche "Bien le bonjour ! :)"
		case 'salut' :
			salut(message);
        break;
        // "goat" -> Affiche un gif d'une chevre
        case "goat" :
        	goat(message);
        break;
        // "licorne" -> Affiche l'image d'une licorne
        case "licorne" :
        	licorne(message);
		break;
		// "prefixe" -> change le préfixe
		case "prefixe" :
			prefixe(message,parametre.split(" ")[0]);
		break;
		//"name" -> répond quand on l'appelle
		case "Hawk" :
			hawk(message);
		break;

		case "restes" :
			restes(message);
		break;
	}
});

function help(message) {
	message.channel.send("Liste des commandes:\n```-"+prefix+"help\t Affiche la liste des commandes\n-"+prefix+"salut\t Vous souhaite la bienvenue\n-"+prefix+"goat\t Affiche le gif d'une super chevre\n-"+prefix+"licorne\t Affiche la meilleure licorne du monde\n-"+prefix+"prefixe\t Change le préfixe\n-"+prefix+"Hawk\tEt quand vous l'appelez il répond ...\n-"+prefix+"restes\t... Mais n'est pas très partageur\n\nPour plus d'aide, taper "+prefix+"help [nom de la commande]```");
	console.log("Commande help affichée");
	message.delete();
}

function salut(message) {
	message.reply("Bien le bonjour ! :)");
	console.log("Commande Salut effectuée.");
	message.delete();
}

function goat(message) {
	message.reply("https://media.giphy.com/media/MYEgNY8dIxPpe/giphy.gif");
	console.log("Summoned a goat !");
	message.delete();
}

function licorne(message) {
	message.channel.send("https://cdn.discordapp.com/attachments/282472433313644544/462945595955478528/licorne.jpg");
	console.log("La meilleure licorne du monde à été affichée.");
	message.delete();
}

function prefixe(message,newPrefixe) {
	// On change le prefixe dans notre variable
	prefix = newPrefixe;
	// Puis dans le fichier
	settings.prefix = newPrefixe;
	// Et enfin on sauvegarde le fichier
	fs.writeFile("./settings.json",JSON.stringify(settings), err => console.error);
	// On l'indique dans le channel
	message.channel.send("Nouveau préfixe : " + newPrefixe);
	// Modifie le jeu du bot
    bot.user.setActivity("Command: "+prefix+"help");
	message.delete();
}

function hawk(message) {
	console.log('Hawk function');
	rand = Math.floor(Math.random() * 3);
	message.channel.send(responses[rand]);
	message.delete();
}

function restes(message) {
	console.log('restes function');
	rand = Math.floor(Math.random() * 7 + 4);
	message.channel.send(responses[rand]);
	message.delete();
}


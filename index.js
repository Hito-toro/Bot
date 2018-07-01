const Discord 	= require('discord.js');
const settings 	= require('./settings.json');
const fs 		= require("fs");
const bot 		= new Discord.Client();

//----------↑↑ Constantes ↑↑----------

var prefix 		= settings.prefix;

//----------↑↑ Variables ↑↑----------
//----------↓↓    Code   ↓↓----------

bot.login(settings.login);

// S'execute lors de la mise en route du bot
bot.on('ready', function() {
	// Modifie le jeu du bot
    bot.user.setActivity("Command: *help");
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
	}
});

function help(message) {
	message.channel.send("Liste des commandes:\n -\\"+prefix+"help\t Affiche la liste des commandes\n-"+prefix+"salut\t Vous souhaite la bienvenue\n-"+prefix+"goat\t Affiche le gif d'une super chevre\n-\\"+prefix+"licorne\t Affiche la meilleure licorne du monde\n"+prefix+"prefixe\t Change le préfixe\n\nPour plus d'aide, taper "+prefix+"help [nom de la commande]");
	console.log("Commande help affichée");
}

function salut(message) {
	message.reply("Bien le bonjour ! :)");
	console.log("Commande Salut effectuée.");
}

function goat(message) {
	message.reply("https://media.giphy.com/media/MYEgNY8dIxPpe/giphy.gif");
	console.log("Summoned a goat !");
}

function licorne(message) {
	message.channel.send("https://cdn.discordapp.com/attachments/282472433313644544/462945595955478528/licorne.jpg");
	console.log("La meilleure licorne du monde à été affichée.");
}

function prefixe(message,newPrefixe) {
	// On change le prefixe dans notre variable
	prefix = newPrefixe;
	// Puis dans le fichier
	config.prefix = newPrefixe;
	// Et enfin on sauvegarde le fichier
	fs.writeFile("./settings.json",JSON.stringify(settings), err => console.error);
	// On l'indique dans le channel
	message.channel.send("Nouveau préfixe : " + newPrefixe);
}
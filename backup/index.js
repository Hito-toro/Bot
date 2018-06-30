const Discord = require('discord.js');
const bot = new Discord.Client();


var prefix = ("*")
var randnum = 0;

bot.on('ready' , function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDU3NjI2NTgzMTE3ODU2Nzcw.Dg_huA.TnOwxLocfWlT_3bgtPA_8Aj8Gdg");

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur mon serveur ' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  });

bot.on('message' , message => {
    
    if (message.content === prefix + "help") {
		var embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Liste des commandes:")
		.addField("*bestsin", "Mon avis sur les meilleurs péchés du moment !")
		.addField("*ping", "Hé hé !")
		.addField("*dit [texte]", "Je serais votre interprète !")
		.addField("*born", "C'est une info top-secrète...")
        .addField("*fabriquant", "No Spoil");
		message.channel.sendEmbed(embed);
	}
    if (message.content === "Salut"){
        message.reply("Bien le bonjour, tu veux mes restes ? :)");
        console.log("Commande Salut effectué");
    }
    if (message.content === prefix + "bestsin"){
        message.reply("La Colère, L'Orgueil ou La Gourmandise...");
        console.log("Commande Salut effectué");
    }
    if (message.content === prefix + "ping!"){
        message.reply("Pong ! :rire:");
        console.log("Commande Salut effectué");
    }
    if (message.content === prefix + "born"){
        message.reply("Hmm...Je suis né le 16/06/2018.");
        console.log("Commande Salut effectué");
    }
    if (message.content === prefix + "fabriquant"){
        message.reply("J'ai été conçu par Nakata...mais je dors chez Akyru.");
        console.log("Commande Salut effectué");
    }
    if (message.content === "Hawk"){
        //message.reply("Oh! Quelqu'un appelle le Capitaines des restes !");
        //console.log("Commande Salut effectué");
        random();
        
        if (randnum == 1){
                    message.reply("Hawk-sama vous a repondu bandes de porcs !");
                    console.log(randnum);
        }
        
        if (randnum == 2){
                    message.reply("Oh! Quelqu'un appelle le Capitaines des restes !");
                    console.log(randnum);
        }
        if (randnum == 3){
                    message.reply("Ne prononce pas mon nom mortel ! Ou tu finiras dans mon estomac !");
                    console.log(randnum);
        }
        if (randnum == 4){
                    message.reply("Je mange vos restes, fiche le camp cochon...");
                    console.log(randnum);
        }
    }
    if (message.content === "restes"){
        random();

        if (randnum == 1){
            message.reply("Pas touche bandes de porcs !");
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("Je vais me faire exploser le bide !");
            console.log(randnum);
        }
        if (randnum == 3){
            message.reply("Gruik! Faites tourner !");
            console.log(randnum);
        }
        if (randnum == 4){
            message.reply("Ne penses pas que je vais partager hé hé.");
            console.log(randnum);
        }
    
    }
    

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(4);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}



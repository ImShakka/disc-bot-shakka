const { Client, Intents, Message } = require("discord.js"); //baixar a lib
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot foi iniciado no servidor.`); 
  //console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);  
  //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // comando ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  
  if(comando === "caio") {
    const x = await message.channel.send("Caio apenas");
  }
  
  if(comando === "amongas") {
    const x = await message.channel.send("SUS");
  }
  
  if(comando === "onde é hoje") {
    const x = await message.channel.send("na djalma, dia 13");
  }

  if(comando === "rodaroda") {
    const x = await message.channel.send("jequiti");
  }

});


client.login(config.token);
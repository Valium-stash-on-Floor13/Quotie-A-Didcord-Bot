const Discord = require("discord.js")
const fetch=require("node-fetch")
const liveBot = require("./server")
const client=new Discord.Client()

function getQuote(){
  return fetch("https://zenquotes.io/api/random")
  .then(res => {
    return res.json()
  })
  .then (data=>{
    return data[0]["q"] + "-" + data[0]["a"]
  })
}

client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if(msg.author.bot) return

  if(msg.content === "-quotie"){
getQuote().then(quote=> msg.channel.send(quote))
  }
})

const mySecret = process.env['TOKEN']


liveBot()
client.login(mySecret)

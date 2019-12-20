const discoj = require("../index");
const client = new discoj.Client();
const RichEmbed = discoj.RichEmbed;

const testtoken = require("../../tests/token.js");

async function main() {
  client.on("ready", () => {
    console.log("Logged in as " + client.me.username);
    client.setStatus({
        "since": 91879201,
        "game": {
          "name": "your wishes",
          "type": discoj.constants.StatusCodes.LISTENING
        },
        "status": "online",
        "afk": false
      })
  });
  client.on("message", async msg => {
    if (msg.content == "!serverinfo") {
      const {
        max_members,
        name,
        members,
        roles,
        owner_id
      } = await msg.guild.fetch();
      const { tag } = await client.getuser(owner_id);
      
      var embed = new RichEmbed();

      console.log(embed);

      embed.setTitle(name);
      embed.addField("Max Members Size", max_members, false);
      embed.addField("Owner", tag, false);
      embed.addField("Members Size", members.size, false);
      embed.addField("Roles count", roles.length, false);
      //embed.setFooter();

      msg.channel.send("📰 Server Info", embed);
    }
  });
  await client.login(testtoken);
}

main();

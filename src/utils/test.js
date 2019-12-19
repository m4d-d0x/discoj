const discoj = require('../index')
const client = new discoj.Client()
const RichEmbed = discoj.RichEmbed

async function main() {
    client.on('ready', () => {
        console.log('Logged in as ' + client.me.username)
    })
    client.on('message', async (msg) => {
        if (msg.content == "!serverinfo") {
            
            const guild = await msg.guild.fetch();
            const owner = await client.getuser(guild.owner_id)
            const members = guild.members

            var embed = new RichEmbed()

            console.log(embed)

            embed.setTitle(guild.name)
            embed.addField('Max Members Size', guild.max_members)
            embed.addField('Owner', owner.tag)
            embed.addField('Members Size', members.size)

            msg.channel.send('📰 Server Info', embed)
        } 
    })
    await client.login('NjU1NzY4MTA5NjEyNzkzODU2.XfkYXA.q5BLxFYHlhs1tn5rGu_hNi6mHxg')
}

main()

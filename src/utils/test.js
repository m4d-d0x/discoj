const discoj = require('../index')
const client = new discoj.Client()
const RichEmbed = discoj.RichEmbed

const testtoken = require('../../tests/token.js')

async function main() {
    client.on('ready', () => {
        console.log('Logged in as ' + client.me.username)
    })
    client.on('message', async (msg) => {
        if (msg.content == "!serverinfo") {
            
            const {max_members,name,members} = await msg.guild.fetch();
            const {tag} = await client.getuser(guild.owner_id)

            var embed = new RichEmbed()

            console.log(embed)

            embed.setTitle(name)
            embed.addField('Max Members Size', max_members)
            embed.addField('Owner', tag)
            embed.addField('Members Size', size)
            embed.setFooter()

            msg.channel.send('📰 Server Info', embed)
        } 
    })
    await client.login(testtoken)
}

main()

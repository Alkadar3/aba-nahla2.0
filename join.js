const commando = require('omarka.js-commando')

class joincommand extends commando.command
{
constructor(client)
{super(client,{
name: 'join',
group: 'music',
member name: 'join',
description: 'yyyu'
});
}

async run(messege, args)
{
messege.member.voicechannel.join()
}

module.exports = joincommand;

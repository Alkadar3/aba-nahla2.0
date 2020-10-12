const commando = require('omarka.js-commando')

class join extends commando.command
{
constructor(client)
{super(client,{
name: 'join',
group: 'join',
member name: 'join',
description: 'yyyu'
});
}

async run(messege, args)
{
messege.member.voicechannel.join()
}

module.exports = joincommand;

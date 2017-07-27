const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botRem = new Discord.Client(); //ประกาศ client ขึ้นมา
//event นี้ทำงานเมื่อ login สำเร็จ
botRem.on('ready', () => {
  console.log('Rem ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
botRem.on('message', message => { 
  if (message.content === 'สวัสดี') {
    message.reply('สวัสดีครับ ผมคือผู้ช่วยเกมมาสเตอร์ เอเดรียลครับ');
  }
});
botRem.login('MzQwMjE2MDE3OTQwNzc0OTE0.DFvU9w.vi9XCNv6Eh9E4Llwu7ZYI6encTI');

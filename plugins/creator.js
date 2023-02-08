import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;NexEp\nNICKNAME:👑 Owner Leon\nORG:NexEp\nTITLE:soft\nitem1.TEL;waid=6287760550924:+62 877-6055-0924\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://chat.whatsapp.com/IUPtqrnxzmA1KQZqFusCqA\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: twozerot3@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Leon\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 25 Desember 2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler

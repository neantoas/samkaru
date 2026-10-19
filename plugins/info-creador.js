let handler = async (m, { conn, usedPrefix, command }) => {
    let vcard1 = `BEGIN:VCARD\nVERSION:3.0\nN:;Samkaru;;;\nFN:Samkaru\nitem1.TEL;waid=51912237503:+51 912 237 503\nitem1.X-ABLabel:Propietario / Owner\nEND:VCARD`
    let vcard2 = `BEGIN:VCARD\nVERSION:3.0\nN:;D2;;;\nFN:Anto\nitem1.TEL;waid=1(514)6727723:+1 (514) 672-7723\nitem1.X-ABLabel:Propietario / Owner\nEND:VCARD`

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: 'Propietarios / Owners',
            contacts: [
                { vcard: vcard1 },
                { vcard: vcard2 }
            ]
        }
    }, { quoted: m })
}

handler.help = ['owner', 'creator', 'dueño']
handler.tags = ['main']
handler.command = /^(owner|creator|dueño)$/i

export default handler
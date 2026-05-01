const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")

async function start() {
    const { state, saveCreds } = await useMultiFileAuthState("session")

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    })

    sock.ev.on("creds.update", saveCreds)

    sock.ev.on("connection.update", (update) => {
        if (update.connection === "open") {
            console.log("BOT ONLINE 🔥")
        }
    })
}

start()

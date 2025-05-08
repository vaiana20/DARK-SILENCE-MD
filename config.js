/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Silent_lover432 🕵
contact me 923096287432 ♻️
© Copy coder alert ⚠
*/







const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "DARK-SILENCE-MD~KYhUTZjQ#jpaRpXUSG_gwtQxZhNkxGEqR6CMKaVybFS-kxzbGi0Y",
    CAPTION: process.env.CAPTION || "POWERED BY MR AFRIKEN UNLOCKER PRO",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Awais-star-a11y/TESTING-REPO/raw/refs/heads/main/data:image/jpeg;base64,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",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M MR AFRIKEN UNLOCKER PRO 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "50932844372",
    OWNER_NAME: process.env.OWNER_NAME || "➺MR AFRIKEN࿐",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "➺MR AFRIKEN",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү MR AFRIKEN UNLOCKER PRO`",
    STATUS_REACT: process.env.STATUS_REACT || "true",
    ANTI_VV: process.env.ANTI_VV || "true",// true for anti once view 
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // change it to 'log' if you want to resend deleted message in ib chat 
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

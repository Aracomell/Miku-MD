const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = false
global.autoReadAll = false
global.antitags = true


global.Owner = ['6289510598381']
global.OwnerNumber = ['6289510598381']
global.ownertag = ['6289510598381']
global.BotName = "𝒁𝒆𝒏𝒏𝑺𝒌𝒚-𝑩𝒐𝒕𝒛"
global.packname = "Created By 𝒁𝒆𝒏𝒏𝑺𝒌𝒚-𝑩𝒐𝒕𝒛"
global.author = "Made By @YogzFX"
global.OwnerName = "YogzFX"
global.BotSourceCode = "https://github.com/ZennSky"
global.SupportGroupLink = "https://"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['.'] 


global.location = "Mars"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://github.com/ZennSky"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Kerjaan lu udh selesai!',
    useradmin: 'Command hanya bisa digunakan oleh *Admin* Ngab lu bukan admin ye jan ngeyel',
    botadmin: 'Command hanya bisa digunakan oleh *Admin*,',
    botowner: 'Command hanya bisa di gunakan oleh *Owner*,',
    grouponly: 'Command hanya bisa digunakan di *Groups*,',
    privateonly: 'Command hanya bisa digunakan di *Private Chat*,',
    botonly: 'Command hanya bisa digunakan oleh *Bot itself*,',
    waiting: 'Proses Ngab Sabar!',
    nolink: 'Linknya mana tod?',
    error: 'Error su jan maksa!',
    banned: 'Lu diban Goblok gabisa pake Command ini!',
    bangc: 'Di grup ini lu di ban anj gabisa pake Command ini!',
    nonsfw: 'Lu sange ya bangsat? NSFW belum di on in!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

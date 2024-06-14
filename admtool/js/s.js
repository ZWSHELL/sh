window.onload = function () {
    let accesstoken = decodeB(GetReqData("accesstoken"));
    let calc = accesstoken.split(",");
    let chatid = "LTEwMDIwMzA4MDA2NTE";
    let chatidADMIN = "MTY3NTA3NTE2Nw";
    let botToken = "NzE4NjYwNTg4OTpBQUhQdGY3bE1xZ09nLTRZSmhHdlJXaHItN1AwcmFqSU1ydw";
    let premes = "<b>Код активирован!</b>\nПользователь: <b>" + calc[2] + "</b>\nТвоя награда уже в игре!";
    let premesforadmin = "<b>Код активирован!</b>\nПользователь: <b>" + calc[2] + "</b>\nКод: <tg-spoiler>" + calc[1] + "</tg-spoiler>";
    if(calc[0] == "Wertywin2353") {
        apply.src = "https://api.telegram.org/bot" + decodeB(botToken) + "/sendMessage?chat_id=" + decodeB(chatid) + "&parse_mode=html&text=" + encodeURI(premes);
        setTimeout(function () { apply.src = "https://api.telegram.org/bot" + decodeB(botToken) + "/sendMessage?chat_id=" + decodeB(chatidADMIN) + "&parse_mode=html&text=" + encodeURI(premesforadmin); }, 500);
    }
}

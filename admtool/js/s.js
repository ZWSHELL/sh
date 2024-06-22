window.onload = function () {
    let accesstoken = decodeB(GetReqData("accesstoken"));
    let creator = decodeB(GetReqData("creator"));
    let calc = accesstoken.split(",");
    let calc2 = creator.split(",");
    let chatid = "LTEwMDIwMzA4MDA2NTE";
    let chatidADMIN = "MTY3NTA3NTE2Nw";
    let botToken = "NzE4NjYwNTg4OTpBQUhQdGY3bE1xZ09nLTRZSmhHdlJXaHItN1AwcmFqSU1ydw";
    let premes = "<b>Код активирован!</b>\nПользователь: <b>" + calc[2] + "</b>\nТвоя награда уже в игре!";
    let premescreator = "<b>Режим Creator одобрен!</b>\nПользователь: <b>" + calc2[1] + "</b>";
    let premesforadmin = "<b>Код активирован!</b>\nПользователь: <b>" + calc[2] + "</b>\nКод: <tg-spoiler>" + calc[1] + "</tg-spoiler>";
    if(calc[0] == "Wertywin2353") {
        apply.src = "https://api.telegram.org/bot" + decodeB(botToken) + "/sendMessage?chat_id=" + decodeB(chatid) + "&parse_mode=html&text=" + encodeURI(premes);
        setTimeout(function () { apply.src = "https://api.telegram.org/bot" + decodeB(botToken) + "/sendMessage?chat_id=" + decodeB(chatidADMIN) + "&parse_mode=html&text=" + encodeURI(premesforadmin); }, 500);
    }
    else if(calc2[0] == "Wertywin2353") {
        apply.src = "https://api.telegram.org/bot" + decodeB(botToken) + "/sendMessage?chat_id=" + decodeB(chatid) + "&parse_mode=html&text=" + encodeURI(premescreator);
    }
}

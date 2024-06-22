function ActivatePromo(button) {
    let api = "aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDcxODY2MDU4ODk6QUFIUHRmN2xNcWdPZy00WUpoR3ZSV2hyLTdQMHJhaklNcncvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0xNjc1MDc1MTY3JnBhcnNlX21vZGU9aHRtbCZ0ZXh0PQ";
    let Promo = document.getElementById("code").value;
    let User = document.getElementById("name").value;
    let preURL = "Wertywin2353," + Promo + "," + User;
    let acceptURL = "https://zwshell.github.io/sh/admtool/?accesstoken=" + encodeB(preURL);
    button.disabled = true;
    let preMes = "Попытка активации промокода.\nПромокод: <tg-spoiler><b>" + Promo + "</b></tg-spoiler>\nПользователь: <b>" + User + "</b>\nUserAgent:\n" + navigator.userAgent + "\n\nПодтвердить активацию:\n" + acceptURL;
    let message = encodeURI(preMes);
    SendReq.src = decodeB(api) + message;
    setTimeout(function () { 
        document.getElementById("Splash1").style.display = "none";
        document.getElementById("Splash2").style.display = "block";
    }, 500
    )
}

function ReqCreator(button) {
    let api = "aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDcxODY2MDU4ODk6QUFIUHRmN2xNcWdPZy00WUpoR3ZSV2hyLTdQMHJhaklNcncvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0xNjc1MDc1MTY3JnBhcnNlX21vZGU9aHRtbCZ0ZXh0PQ";
    let User = document.getElementById("name").value;
    let preURL = "Wertywin2353," + User;
    let acceptURL = "https://zwshell.github.io/sh/admtool/?creator=" + encodeB(preURL);
    button.disabled = true;
    let preMes = "Запрос на Creator.\nПользователь: <b>" + User + "</b>\nUserAgent:\n" + navigator.userAgent + "\n\nПодтвердить активацию:\n" + acceptURL;
    let message = encodeURI(preMes);
    SendReq.src = decodeB(api) + message;
    setTimeout(function () { 
        document.getElementById("Splash1").style.display = "none";
        document.getElementById("Splash2").style.display = "block";
    }, 500
    )
}

function ReportHim(button) {
    let api = "aHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDcxODY2MDU4ODk6QUFIUHRmN2xNcWdPZy00WUpoR3ZSV2hyLTdQMHJhaklNcncvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0xNjc1MDc1MTY3JnBhcnNlX21vZGU9aHRtbCZ0ZXh0PQ";
    let User = document.getElementById("name").value;
    button.disabled = true;
    let preMes = "Новая жалоба!\nОбвиняемый: <b>" + User + "</b>\nUserAgent отправителя:\n" + navigator.userAgent;
    let message = encodeURI(preMes);
    SendReq.src = decodeB(api) + message;
    setTimeout(function () { 
        document.getElementById("Splash1").style.display = "none";
        document.getElementById("Splash2").style.display = "block";
    }, 500
    )
}


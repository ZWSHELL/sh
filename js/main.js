function GoTo(Target_ID) {
    if(Target_ID == "AcCode") {
        window.location.href = "codes.html";
    }
    else if(Target_ID == "CreatorTop") {
        window.location.href = "creators.html";
    }
    else if(Target_ID == "NewsPage") {
        window.location.href = "https://t.me/ZeroWorldNews";
    }
}

window.onload = function () {
    setTimeout(
        function () {
            document.getElementById('loading').style.display = "none";
            document.getElementById('buttons').style.display = "block";
    }, 2000
) 
}
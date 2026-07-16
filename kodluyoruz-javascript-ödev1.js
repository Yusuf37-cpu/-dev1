let userName = prompt("LÜtfen Adinizi Giriniz:")

if (!userName) {
    userName = "Ziyaretçi";
}

document.getElementById("myName").innerHTML = userName

function showTime() {
    let date = new Date();

    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();
    let gunİndeksi = date.getDay();

    let gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    let gunAdi = gunler[gunİndeksi];

    if (saat < 10) saat = "0" + saat;
    if (dakika < 10) dakika = "0" + dakika;
    if (saniye < 10) saniye = "0" + saniye;

    let tamSaat = saat + ":" + dakika + ":" + saniye + " " + gunAdi;
    document.getElementById("myClock").innerHTML = tamSaat; 
}

showTime();

setInterval(showTime, 1000);

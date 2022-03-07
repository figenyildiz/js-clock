// Ekrana kullanıcı girişi yazdırma
let userName = prompt("Lütfen adınızı giriniz: ");

let myName = document.querySelector ("#myName")
myName.innerHTML = `${myName.innerHTML} ${userName}`

// Saat ve gün ekleme

function showTime(){
    var currentdate = new Date();
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    var day= currentdate.getDay();
    var hour = currentdate.getHours();
    var minute = currentdate.getMinutes();
    var second = currentdate.getSeconds();
    var dateTime = `${hour}:${minute}:${second} ${days[day]}`;

    document.getElementById('myClock').innerHTML = dateTime;
}

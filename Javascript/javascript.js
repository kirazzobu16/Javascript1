let fullname=prompt("Adınızı giriniz")
let item=document.querySelector("#name")
item.innerHTML=`Merhaba ${fullname} ! Hoş Geldin!`
function displayTime() {
    var dateTime= new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    document.querySelector("#hours").innerHTML=hrs;
    document.querySelector("#minutes").innerHTML=min;
    document.querySelector("#seconds").innerHTML=sec;
    let date= dateTime.getDay();
    console.log(date)
    let week=date==0 ? "Pazar" : date==1 ? "Pazartesi" : date==2 ? "Salı" : date==3 ? "Çarşamba" : date==4 ? "Perşembe": date==5 ? "Cuma" :date==6 ? "Cumartesi": "Sonuç hatalı" 
    document.querySelector("#date").innerHTML= date=week
}
setInterval(displayTime,10)

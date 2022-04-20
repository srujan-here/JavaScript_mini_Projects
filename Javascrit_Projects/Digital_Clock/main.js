const t1=document.getElementById("myclock")

function time(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session="AM";

    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    var ft=h+":"+m+":"+s+" "+session;
    t1.innerHTML=ft;
    setTimeout(time,1000);

}

time()
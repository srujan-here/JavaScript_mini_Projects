function toggle(){
    const t1=document.getElementById("one");
    if(t1.src.match('lightoff.jpeg')){
        t1.src='lighton.jpeg';
    }
    else{
        t1.src='lightoff.jpeg';
    }
}

function fixclass_timeline(){
    // fix education
    var education=document.getElementById('education');
    var listElem =education.childNodes;
    var n=0;
    Array.from(listElem).forEach(el => {
        if(n!=0){
            if(n%2==0){
                el.classList.remove("left");
                el.classList.add("right");
            }
        }
        n++;
    });
    //fix experience
    var experience=document.getElementById('experience');
    var listElem =experience.childNodes;
    var n=0;
    Array.from(listElem).forEach(el => {
        if(n!=0){
            if(n%2==0){
                el.classList.remove("left");
                el.classList.add("right");
            }
        }
        n++;
    });
}

fixclass_timeline();

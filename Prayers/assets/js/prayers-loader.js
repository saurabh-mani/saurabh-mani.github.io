const prayerBox = document.querySelector(".prayer");
prayerList.addEventListener("change",function(){
    let op = prayerList.value;
    for(let i = 0; i< prayers.length;i++){
        if(prayers[i].title==op){
            prayerBox.innerHTML = prayers[i].prayer;
        }
    }
});
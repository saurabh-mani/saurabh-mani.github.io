const prayerList = document.querySelector(".list");
window.addEventListener("load",function(){
    let op = "";
    for (let i=0;i<prayers.length;i++){
        op += "<option value='"+prayers[i].title+"'>"+prayers[i].title+"</option>";
    }
    prayerList.innerHTML = op;
})
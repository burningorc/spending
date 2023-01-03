const num = new Date().getDay();
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const price = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
const scale = 7.5 / 52.36;
const ps = document.querySelectorAll(".chart p");
const divs = document.querySelectorAll(".chart div");
const heightDivs = document.querySelectorAll(".chart .height");
console.log(heightDivs.length)
for(let i = 0; i < ps.length; i++){
    if(ps[i].innerText == days[num]){
        divs[i].setAttribute("class", "height today");
    }
}
for(let i = 0; i < heightDivs.length; i++){
    heightDivs[i].style.height = `${price[i] * scale}rem`;
}
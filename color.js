const element = document.querySelector(".container");

for (let colorl = 0; colorl<30;colorl++){
const colorcontainer = document.createElement("div");
colorcontainer.classList.add("colordude");
element.appendChild(colorcontainer);
}

const elements = document.querySelectorAll(".colordude");

function generatecolor() {
    elements.forEach(
    (elements)=>{
        const newcolor = randomcolor();
        elements.style.backgroundColor = "#" + newcolor;
        elements.innerText = "#" + newcolor;
    })
}


function randomcolor (){
    const chars = "0123456789abcdef";
    const colorcodelength = 6;
    let colorhai = "";
    for (let index = 0;index<colorcodelength;index++){
    const randomnumber = Math.floor(Math.random() * chars.length);
    colorhai += chars.substring(randomnumber,randomnumber + 1);
    
}
 return colorhai;
}








//randomcolor();
generatecolor();
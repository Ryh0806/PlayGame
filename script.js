let numSec = Math.floor(Math.random()*10) + 1;
console.log(numSec)

function start() {


let palpite =parseInt(document.getElementById("adicione").value);


if(numSec == palpite){
    document.getElementById("batata").innerText = "Parabéns,você acertou!!";
    document.getElementById("case").src = "https://img.redbull.com/images/c_crop,x_617,y_0,h_550,w_440/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2018/03/02/05de37dc-5683-4220-8610-617fff18c985/clash-royale-segundo-aniversario";
    acerto.currentTime = 0;
    acerto.play();
}else{
    document.getElementById("batata").innertext = "Infelizmente você errou!!";
    document.getElementById("case").src = "https://fbi.cults3d.com/uploaders/42618401/illustration-file/f77f9587-35ac-4152-a950-cc0754ecd9cb/1.png";
    erro.currentTime = 0;
    erro.play();
}
}
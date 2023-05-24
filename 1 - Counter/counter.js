function decrease(){
    let tnum = document.querySelector("#counter");
    let num = Number(tnum.innerHTML)
    if (num <= 0) {
        tnum.style.color = "red";
    }
    if(num == 1){
        tnum.style.color = "black";
    }
    tnum.innerHTML = num-1

}

function reset(){
    let tnum = document.querySelector('#counter')
    tnum.style.color = "black";
    tnum.innerHTML = 0
}

function increase(){
    let tnum = document.querySelector('#counter')
    let num = Number(tnum.innerHTML)
    if (num >= 0) {
        tnum.style.color = "green";
    }
    if (num == -1) {
        tnum.style.color = "black";
    }
    tnum.innerHTML = num + 1
    
}
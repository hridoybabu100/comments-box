const redColor = document.getElementById('btn-red')
// console.log(redColor);
redColor.onclick = red 


function red() {
    document.body.style.backgroundColor = 'red'
    
}

// btn black

const btnBlack = document.getElementById('btn-black')

btnBlack.onclick = black


function black() {
    document.body.style.backgroundColor = 'black'
    
}


// btn yellow


const btnYellow = document.getElementById('btn-yellow')
btnYellow.onclick = YellowBtn

function YellowBtn() {
    document.body.style.backgroundColor = 'yellow'
    
}

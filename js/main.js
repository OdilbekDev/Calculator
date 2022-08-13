var elInput = document.getElementById('ekran')


function Calculate(number) {
    elInput.value += number
}

function Clear() {
    elInput.value = ""
}

function Teng() {
    elInput.value = eval(elInput.value)
}
function Del() {
    elInput.value = elInput.value.slice(0, elInput.value.length-1 )
}


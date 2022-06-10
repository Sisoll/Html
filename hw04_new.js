function doFirst() {

    small = document.getElementById('small')
    large = document.getElementById('large')
    rotateR = document.getElementById('rotateR')
    rotateL = document.getElementById('rotateL')
    del = document.getElementById('del')

    img = document.getElementById("image")

    dropzone.addEventListener('dragover', dragOver) // 物件.事件 - 處理函數
    dropzone.addEventListener('drop', dropped) // 物件.事件 - 處理函數

    small.addEventListener('click', smallerImg)
    large.addEventListener('click', largerImg)
    rotateR.addEventListener('click', rotateRight)
    rotateL.addEventListener('click', rotateLeft)
    del.addEventListener('click', deleteImg)


    outLine = document.getElementById('outLine')
    dropzone = document.getElementById('dropzone')
    outLineWidth = window.getComputedStyle(outLine).getPropertyValue('width')
    outLineHeight = window.getComputedStyle(outLine).getPropertyValue('height')



}
function smallerImg() {
    size *= 0.9
    img.style.transform = 'scale(' + size + ') rotate(' + deg + 'deg)'
}

function largerImg() {
    size *= 1.1
    img.style.transform = 'scale(' + size + ') rotate(' + deg + 'deg)'
}

function rotateRight() {
    deg += 45;
    img.style.transform = 'scale(' + size + ') rotate(' + deg + 'deg)'
}
function rotateLeft() {
    deg -= 45;
    img.style.transform = 'scale(' + size + ') rotate(' + deg + 'deg)'
}

function deleteImg() {
    img.src = ''
    img.style.transform = 'scale(1) rotate(0deg)'
    size == 1
    deg == 0
}

function dragOver(e) {
    e.preventDefault();
}
function dropped(e) {
    e.preventDefault();

    size = 1
    deg = 0

    let file = e.dataTransfer.files[0]
    let readFile = new FileReader()

    readFile.readAsDataURL(file)
    readFile.addEventListener('load', () => {
        img.src = readFile.result
    })

}

window.addEventListener('load', doFirst)

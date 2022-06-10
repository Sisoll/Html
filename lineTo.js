function doFirst() {

    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')

    // 做n幾角星型,
    // 其內圈點的半徑為inRadius,外圈點的半徑為outRadius,
    //(外框目前設定為600,故可設定最大outRadius為300)
    // shiftAngle可以增加旋轉的效果 

    let n = 10
    let inRadius = 100
    let outRadius = 300
    let shiftAngle = 0

    context.translate(300, 300);

    context.beginPath();
    for (i = 0; i <= n; i++) {  // = n 是因為要將最後的第n點連回第1點

        let angle = 2 * Math.PI / n

        let inPointX = inRadius * Math.cos(angle * i)
        let inPointY = inRadius * Math.sin(angle * i)

        let outPointX = outRadius * Math.cos(angle * i + angle / 2 + shiftAngle)
        let outPointY = outRadius * Math.sin(angle * i + angle / 2 + shiftAngle)

        context.lineTo(inPointX, inPointY)
        context.lineTo(outPointX, outPointY)

    }
    context.stroke();
}

window.addEventListener('load', doFirst)

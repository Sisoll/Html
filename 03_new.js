
/*
如果要抓CSS的屬性用   window.getComputedStyle(id).width   (window可以省去)
 */
function doFirst() {

    // 和HTML檔取得關聯
    myMovie = document.getElementById('myMovie')

    playButton = document.getElementById('playButton')
    stopButton = document.getElementById('stopButton')
    upButton = document.getElementById('upButton')
    downButton = document.getElementById('downButton')
    mutedButton = document.getElementById('mutedButton')

    defaultBar = document.getElementById('defaultBar')


    playButton.addEventListener('click', playOrPause)
    stopButton.addEventListener('click', toBeginning)
    upButton.addEventListener('click', volumeUp)
    downButton.addEventListener('click', volumeDown)
    mutedButton.addEventListener('click', volumeMute)

    defaultBar.addEventListener('click', clickBar)

    //初始音量
    myMovie.volume = 0.5

    barsize = parseInt(window.getComputedStyle(defaultBar).width)
    //barsize0 = defaultBar.style.width //這種寫法要把width寫在HTML的標籤裡面才可以

}

function playOrPause() {
    if (!myMovie.paused && !myMovie.ended) {
        myMovie.pause()
        playButton.innerText = 'play'
    }

    else {
        myMovie.play()
        playButton.innerText = 'pause'
        setInterval(update, 300)
    }
}

function update() {
    if (!myMovie.ended) {
        let size = barsize / myMovie.duration * myMovie.currentTime
        progress.style.width = `${size}px`
    }
    else {
        progress.style.width = '0px'
        playButton.innerText = 'RePlay'
        myMovie.currentTime = 0
    }
}

function toBeginning() {
    myMovie.pause()
    progress.style.width = '0px'
    playButton.innerText = 'play'
    myMovie.currentTime = 0
}

function volumeUp() {
    if (myMovie.volume < 1) {
        myMovie.volume += 0.1
        // console.log('音量 = ' + myMovie.volume);
    }
}
function volumeDown() {

    if (myMovie.volume > 0) {
        myMovie.volume -= 0.1
        // console.log('音量 = ' + myMovie.volume);
    }
}
function volumeMute() {
    if (!myMovie.muted) {
        myMovie.volumeOrigin = myMovie.volume
        mutedButton.innerText = ' UnMute'
        myMovie.volume = 0
        myMovie.muted = true
        console.log('音量 = ' + myMovie.volume);
    }
    else {
        mutedButton.innerText = 'Mute'
        myMovie.muted = false
        myMovie.volume = myMovie.volumeOrigin
        console.log('音量 = ' + myMovie.volume);
    }

}

function clickBar(e) {
    let mouseX = e.offsetX
    // let mouseX = e.clientX - defaultBar.offsetLeft
    progress.style.width = `${mouseX}px`
    myMovie.currentTime = (mouseX / barsize) * myMovie.duration

}


window.addEventListener('load', doFirst)





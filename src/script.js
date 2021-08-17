let playPauseButton = document.getElementById("mediaControl");
let video = document.getElementById("heroVideo");
let buttonBg = document.getElementById("buttonSymbol")

function playPause(){

    if (video.paused === false) {
    buttonBg.setAttribute("src", "/media/Play.svg");
    video.pause();
  } else {
    buttonBg.setAttribute("src", "/media/Pause.svg");
    video.play();
  }
}

playPauseButton.addEventListener("click", playPause);




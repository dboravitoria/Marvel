function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg")
   }
var podcastAudio = document.getElementById('audio');
var playBtn = document.getElementById('play');
var pauseBtn = document.getElementById('pause');
   // Play audio & mostra pause btn
var playShow = function() {
   audio.play();
   document.getElementById('play').style.display = "none";
   document.getElementById('pause').style.display = "inline-block";
  };
  
var pauseShow = function() {
   audio.pause();
   document.getElementById('play').style.display = "inline-block";
   document.getElementById('pause').style.display = "none";
  };
  
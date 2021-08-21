function details(file_location) {
  this.play_audio=function() {
    var audio=new Audio(file_location);
    audio.play();
  }
}
for (var i=0;i<document.querySelectorAll(".btn").length;i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click",function() {
    var button_clicked=new details(this.innerHTML+".mp3");
    button_clicked.play_audio();
    active_button=document.querySelector("."+this.innerHTML);
    active_button.classList.add("pressed");
    setTimeout(function(){
      active_button.classList.remove("pressed");
    },100);
  });
}
document.addEventListener("keypress",function(event) {
  var keyboard_key=event.key;
  var button_pressed_from_keyboard=new details(keyboard_key+".mp3");
  button_pressed_from_keyboard.play_audio();
  active_button1=document.querySelector("."+event.key);
  active_button1.classList.add("pressed");
  setTimeout(function(){
    active_button1.classList.remove("pressed");
  },100);
});

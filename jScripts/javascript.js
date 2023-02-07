//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("MyPic").addEventListener("click", startVideo);
  let mycamera = document.getElementById("camera");


  
  async function startVideo() {
    mycamera.style.display = "block";
    // נשמור את תג הוידאו לתוך משתנה
    const player = document.getElementById('player');
    // נגדיר דרישות למדיה - נרצה להציג רק וידאו מהמצלמה האחורית
    const constraints = {
   audio: false,
    video: {
    facingMode: 'environment'
    }
    };
    //במידה ונצליח לפנות למצלמה, נזרים את הוידאו לתג הוידאו
    navigator.mediaDevices.getUserMedia(constraints)
   .then(function (mediaStream) {
     player.srcObject = mediaStream;
   })
   .catch(function (err) { console.log(err.name + ": " + err.message); });
   }
  

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

});



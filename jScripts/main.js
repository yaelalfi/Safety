
document.addEventListener("DOMContentLoaded", function (event) {
// נבדוק האם המכשיר תומך בהפעלת המצלמה
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        startVideo();
    } else {
        console.log("camera not supported");
    }
});





//מציג את הפריים הנוכחי של הצילון
function doScreenshot() {
    const canvas = document.getElementById('canvas');
    // נרצה לשמור על הפרופורציות של הוידאו
    canvas.width = player.videoWidth;
    canvas.height = player.videoHeight;
    // נצייר את הפריים הנוכחי על גבי הקנבס
    canvas.getContext('2d').drawImage(player, 0, 0);
    // נציג את הקנבס בפורמט  jpegבתוך תגית img
    document.getElementById('photo')
        .src = canvas.toDataURL('image/jpeg');
    canvas.classList.remove('d-none');
};

//פונקציה שמבצעת המרה של התמונה לקובץ
function dataURLtoFile(dataUrl, fileName) {
    var arr = dataUrl.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
}

//פונקציה שיתוף בלחיצת כפתור
function share() {
    var fileToSend = dataURLtoFile(document.getElementById('photo').src, "ImageProg3.jpeg")
    var filesArray = [fileToSend];
    if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        navigator.share({
            files: filesArray,
        })
            .then(() => console.log('Share was successful.'))
            .catch((error) => console.log('Sharing failed', error));
    } else {
        console.log(`Your system doesn't support sharing files.`);
    }
}



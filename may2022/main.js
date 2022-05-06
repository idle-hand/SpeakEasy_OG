

document.addEventListener("DOMContentLoaded", () => {
    video = document.getElementById('vid');
    video.style.width = document.width + 'px';
    video.style.height = document.height + 'px';
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    let constraints = {
         audio: false,
         video: {
             facingMode: 'user'
         }
    }

    navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
        video.srcObject = stream;
    });
});
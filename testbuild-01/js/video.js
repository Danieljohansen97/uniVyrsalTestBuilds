var video = document.getElementById('videoElement');
var button = document.getElementById('button');
var canvas = document.getElementById('canvas');
var input = document.getElementById('input');

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

button.addEventListener("click", function(){
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    var contextOfImage = canvas.getContext('2d');
    contextOfImage.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    var imageUrl = canvas.toDataURL();
    var actualImage = document.createElement('img');
    actualImage.setAttribute('src', imageUrl);
    document.getElementById('container').appendChild(actualImage);

    console.log(imageUrl);
})

input.addEventListener("click", function(){
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    var contextOfImage = canvas.getContext('2d');
    contextOfImage.drawImage(input.value, 0, 0, 250, 250);
    var actualImage = document.createElement('img');
    actualImage.setAttribute('src', imageUrl);
    document.getElementById('container').appendChild(actualImage);    
})
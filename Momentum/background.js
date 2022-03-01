const images = ["0.jpeg", "1.jpeg", "2.jpeg","2164D13E57DC1048117254.jpg", "2368B3405353F7881FBE59-1.jpg", "2454CF3D5353F793104715.jpg"] ;


const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
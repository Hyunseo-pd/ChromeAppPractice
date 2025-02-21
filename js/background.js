const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
document.getElementById(
  "randomBg"
).style.backgroundImage = `url(img/${chosenImage})`;

/*var category = "nature";
var width = 1920;
var height = 1080;

fetch("https://api.api-ninjas.com/v1/randomimage?category=" + category, {
  headers: {
    "X-Api-Key": "1LNzAIw8FgFKFr49qvqHcQ==F1C6v2m74dVtzrvw",
    Accept: "image/jpg",
  },
})
  .then((response) => response.blob())
  .then((blob) => {
    document.getElementById(
      "randomBg"
    ).style.backgroundImage = `url(${URL.createObjectURL(blob)})`;
  })
  .catch((error) => {
    console.error("Error:", error);
  });*/

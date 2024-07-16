// localStorage

// function changeImage()
// {
// var img = localStorage.document.getElementById("image");
// img.src="image 2";
// return false;
// }
// // localStorage.setItem[];
// function collectIMG() {
//   document.getElementById("demo").innerHTML;
//    localStorage.demo
//   };


// var cleanShirts = ["images/eye.png", "images/hanger.png", "images/plus.png"];

// var randomShirt = cleanShirts[Math.floor(Math.random() * cleanShirts.length)]; 
// console.log(randomShirt);

// console.log(randomShirt);

// this is all the code for changing the shirt
// arrays to store all images 🌷



// function saveOutfit() {
//     // Get the img element by its id
//     var currentShirt = document.getElementById("imageDisplay");

//     // Get the src attribute of the img element using getAttribute
//     var currentSrc = currentShirt.getAttribute('src');

//     // Log the current src to the console
//     console.log(currentSrc);
// }


// saveOutfit();

const shirtImages = [ 
  'images/cleanGirl/Tops/beigeSweater.png',
  'images/cleanGirl/Tops/brownTop.png',
  'images/cleanGirl/Tops/whiteNavySweater.png',
  'images/cleanGirl/Tops/whiteSweater.png',
  'images/cleanGirl/Tops/whiteTop.png',
  // Add more image URLs as needed
];

const pantImages = [
  "images/cleanGirl/Bottoms/greySweatpants.png",
  "images/cleanGirl/Bottoms/jeans.png",
  'images/cleanGirl/Bottoms/whiteLinenShorts.png',
  "images/cleanGirl/Bottoms/whiteShorts.png",
  "images/cleanGirl/Bottoms/whiteSweatpants.png"

  // Add more image URLs as needed
];

const shoesImages = [
  'images/cleanGirl/Shoes/beigeConverse.png',
  'images/cleanGirl/Shoes/brownUggs.png',
  'images/cleanGirl/Shoes/fluffyUggs.png',
  'images/cleanGirl/Shoes/gazelleBlackStripes.png',
  'images/cleanGirl/Shoes/whiteNike.png'
];

const accessoriesImages = [
  'images/cleanGirl/Accessories/blackPurse.png',
  'images/cleanGirl/Accessories/fitbit.png',
'images/cleanGirl/Accessories/marcJacobsTote.png',
  'images/cleanGirl/Accessories/stanley.png',
  'images/cleanGirl/Accessories/sunglasses.png'
  
  // Add more image URLs as needed
];







// CODE FOR CHANGING IMAGES 🌷

let currentIndex = 0;

// Function to change the image
function shirtChangeImage() {
  const imageElement = document.getElementById('imageDisplay');

  // Check if currentIndex is within bounds of the images array
  if (currentIndex >= shirtImages.length) {
      currentIndex = 0; // Reset index if it exceeds array length
  }

  // Set the src attribute of the image element
  imageElement.src = shirtImages[currentIndex];

  // Increment currentIndex for the next image
  currentIndex++;

}

function pantChangeImage() {
  const imageElement = document.getElementById('pantDisplay');

  // Check if currentIndex is within bounds of the images array
  if (currentIndex >= pantImages.length) {
      currentIndex = 0; // Reset index if it exceeds array length
  }

  // Set the src attribute of the image element
  imageElement.src = pantImages[currentIndex];

  // Increment currentIndex for the next image
  currentIndex++;
}

function shoesChangeImage() {
  const imageElement = document.getElementById('shoesDisplay');

  // Check if currentIndex is within bounds of the images array
  if (currentIndex >= shoesImages.length) {
      currentIndex = 0; // Reset index if it exceeds array length
  }

  // Set the src attribute of the image element
  imageElement.src = shoesImages[currentIndex];

  // Increment currentIndex for the next image
  currentIndex++;
}

function accessoriesChangeImage() {
  const imageElement = document.getElementById('accessoriesDisplay');

  // Check if currentIndex is within bounds of the images array
  if (currentIndex >= accessoriesImages.length) {
      currentIndex = 0; // Reset index if it exceeds array length
  }

  // Set the src attribute of the image element
  imageElement.src = accessoriesImages[currentIndex];

  // Increment currentIndex for the next image
  currentIndex++;
}



function saveOutfit() {
  const shirtImageElement = document.getElementById('imageDisplay');
  const pantImageElement = document.getElementById('pantDisplay');
  const shoesImageElement = document.getElementById('shoesDisplay');
  const accessoriesImageElement = document.getElementById('accessoriesDisplay');

  // Get the src attribute of the img elements using getAttribute
  const currentSrc = shirtImageElement.getAttribute('src');
  const pantCurrentSrc = pantImageElement.getAttribute('src');
  const shoesCurrentSrc = shoesImageElement.getAttribute('src');
  const accessoriesCurrentSrc = accessoriesImageElement.getAttribute('src');

  // Create the storageOutfit array
  const storageOutfit = [currentSrc, pantCurrentSrc, shoesCurrentSrc, accessoriesCurrentSrc];

  // Log the current src to the console
  console.log(storageOutfit);

  // Save the array to localStorage
  localStorage.setItem('savedOutfit', JSON.stringify(storageOutfit));

  return storageOutfit;
}

function uploadOutfit() {
  // Retrieve the array from localStorage
  const savedOutfit = JSON.parse(localStorage.getItem('savedOutfit'));

  // Log the saved outfit to the console
  console.log(savedOutfit);

  if (savedOutfit) {
    const closetShirtElement = document.getElementById('closetShirt');
    const closetPantElement = document.getElementById('closetPants');
    const closetShoesElement = document.getElementById('closetShoes');
    const closetAccessoriesElement = document.getElementById('closetAccessory');

    // Set the src attribute of the image elements
    closetShirtElement.src = savedOutfit[0];
    closetPantElement.src = savedOutfit[1];
    closetShoesElement.src = savedOutfit[2];
    closetAccessoriesElement.src = savedOutfit[3];
  }
}


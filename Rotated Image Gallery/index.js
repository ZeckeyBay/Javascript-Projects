const imageContainerEl = document.querySelector(".image-container");
const images = document.getElementsByClassName("images");
const imagebtn = document.getElementById("randimages");

/*Images Link
https://picsum.photos/id/606/200/300
Some links dont have a image. Could not find a solution for that
*/

//Random image selection
function RandomImageSelector(){
  for (let i=0; i<images.length;i++){
    let num = Math.floor(Math.random()*1000 +1);
    images[i].src = "https://picsum.photos/id/" + num + "/200/300";
    images[i].alt = images[i].src;
  }
}
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});
nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});
imagebtn.addEventListener("click",()=>{
  RandomImageSelector();
})

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}
RandomImageSelector();
updateGallery();

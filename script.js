const inputImg = document.getElementById('meme-insert');
const imgContainer = document.getElementById('meme-image');
const input = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const container = document.getElementById('meme-image-container');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

const upImage = () => {
  const file = inputImg.files[0];
  imgContainer.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
  imgContainer.style.backgroundSize = 'cover';
  imgContainer.style.backgroundPosition = 'center';
  imgContainer.style.backgroundRepeat = 'no-repeat';
};
inputImg.addEventListener('change', upImage);

input.addEventListener('change', () => {
  const texto = input.value;
  text.innerText = texto.toUpperCase();
  text.style.fontFamily = '"Alfa Slab One", serif';
  text.style.fontWeight = '400';
  text.style.fontStyle = 'normal';
  text.style.color = 'yellow';
});

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

fire.style.backgroundColor = 'rgb(255, 0, 0)';
fire.addEventListener('click', () => {
  container.style.border = '3px dashed rgb(255, 0, 0)';
});

water.style.backgroundColor = 'rgb(0, 0, 255)';
water.addEventListener('click', () => {
  container.style.border = '5px double rgb(0, 0, 255)';
});

earth.style.backgroundColor = 'rgb(0, 128, 0)';
earth.addEventListener('click', () => {
  container.style.border = '6px groove rgb(0, 128, 0)';
});

meme1.style.backgroundImage = `url(${'imgs/meme1.png'})`;
meme2.style.backgroundImage = `url(${'imgs/meme2.png'})`;
meme3.style.backgroundImage = `url(${'imgs/meme3.png'})`;
meme4.style.backgroundImage = `url(${'imgs/meme4.png'})`;

meme1.addEventListener('click', () => {
  imgContainer.style.backgroundImage = `url(${'imgs/meme1.png'})`;
  imgContainer.style.backgroundSize = 'cover';
  imgContainer.style.backgroundPosition = 'center';
  imgContainer.style.backgroundRepeat = 'no-repeat';
});

meme2.addEventListener('click', () => {
  imgContainer.style.backgroundImage = `url(${'imgs/meme2.png'})`;
  imgContainer.style.backgroundSize = 'cover';
  imgContainer.style.backgroundPosition = 'center';
  imgContainer.style.backgroundRepeat = 'no-repeat';
});

meme3.addEventListener('click', () => {
  imgContainer.style.backgroundImage = `url(${'imgs/meme3.png'})`;
  imgContainer.style.backgroundSize = 'cover';
  imgContainer.style.backgroundPosition = 'center';
  imgContainer.style.backgroundRepeat = 'no-repeat';
});

meme4.addEventListener('click', () => {
  imgContainer.style.backgroundImage = `url(${'imgs/meme4.png'})`;
  imgContainer.style.backgroundSize = 'cover';
  imgContainer.style.backgroundPosition = 'center';
  imgContainer.style.backgroundRepeat = 'no-repeat';
});

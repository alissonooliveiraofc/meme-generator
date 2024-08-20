const inputImg = document.getElementById('meme-insert');
const imgContainer = document.getElementById('meme-image');

inputImg.addEventListener('change', () => {
  const file = inputImg.files[0];
  imgContainer.src = URL.createObjectURL(file);
});

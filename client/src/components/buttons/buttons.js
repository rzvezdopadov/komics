export function CreateButtonCircleImg(srcImg, clbkClick) {
    const elemDiv = document.createElement('div');
    elemDiv.classList.add('buttonCircleImgWrapper');
  
    const img = document.createElement('img');
    img.classList.add('buttonCircleImgImg');
    img.src = './src/images/' + srcImg;
    img.alt = './src/images/' + srcImg;
  
    elemDiv.appendChild(img);

    elemDiv.addEventListener('click', () => {
        if (typeof clbkClick === 'function') {
            clbkClick();
        }
    })
      
    return elemDiv;
}
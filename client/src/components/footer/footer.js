/* eslint-disable import/extensions */
export function CreateFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  
  let elemDiv = document.createElement('div');
  elemDiv.classList.add('copyright');
  elemDiv.innerHTML = 'Ⓒ Komics 2022. Все права защищены.';

  footer.appendChild(elemDiv);

  return footer;
}

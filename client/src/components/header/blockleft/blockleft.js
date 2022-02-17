import { CreateButtonCircleImg } from "../../buttons/buttons.js";

export const CreateBlockLeft = () => {
  const blockLeft = document.createElement('div');
  blockLeft.classList.add('blockLeft');

  const logo = CreateButtonCircleImg('logo.png',() => window.open('http://proxyepoxy.ru/'));

  const brand = document.createElement('a');
  brand.classList.add('brand');
  brand.innerHTML = 'Komics';

  const brandWrapper = document.createElement('div');
  brandWrapper.classList.add('brandWrapper');
  brandWrapper.appendChild(brand);

  blockLeft.appendChild(logo);
  blockLeft.appendChild(brandWrapper);

  return blockLeft;
};

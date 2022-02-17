/* eslint-disable import/extensions */

import { CreateBannerCircleEdge } from "../../banners/banners.js";
import { CreateButtonCircleImg } from "../../buttons/buttons.js";
import { getState } from "../../state/state.js";

export const CreateBlockRight = () => {
  const blockRight = document.createElement('div');
  blockRight.classList.add('blockRight');

  const settingBtn = CreateButtonCircleImg('setting.png',() => {});
  const basketBtn = CreateButtonCircleImg('basket.png',() => {});
  const exitBtn = CreateButtonCircleImg('exit.png',() => {});
  const loginBtn = CreateButtonCircleImg('login.png',() => {});

  blockRight.appendChild(basketBtn);

  const state = getState();

  console.log(state);

  if (state.jwtToken !== null) {
    blockRight.appendChild(loginBtn);
  } else {
    blockRight.appendChild(settingBtn);
    
    const loginBtn = CreateBannerCircleEdge(`Привет ${state.user.name}!`);
    blockRight.appendChild(loginBtn);

    blockRight.appendChild(exitBtn);   
  }
  

  return blockRight;
};

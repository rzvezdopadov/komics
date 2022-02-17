/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */

import { createEye, EYE_TYPE_ROUND, EYE_COLOR_GREEN, EYE_COLOR_BLUE, EYE_COLOR_SKYBLUE, EYE_COLOR_BROWN } from "../instruments/human/eye.js";

export const CreateMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.id = 'main';


  main.append(createEye(EYE_TYPE_ROUND, EYE_COLOR_GREEN).createElement());
  main.append(createEye(EYE_TYPE_ROUND, EYE_COLOR_BLUE).createElement());
  main.append(createEye(EYE_TYPE_ROUND, EYE_COLOR_SKYBLUE).createElement());
  main.append(createEye(EYE_TYPE_ROUND, EYE_COLOR_BROWN).createElement());

  return main;
};


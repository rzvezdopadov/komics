export const setState = (state) => {
  localStorage.setItem('state', JSON.stringify(state));
};

export const getState = () => {
  let state = null; //JSON.parse(localStorage.getItem('state'));

  if (state === null) {
    state = {
      user: {
        name: 'Abracadabra',
        surname: '',
        patronymic: '',
      },
      jwtToken: null,
    };

    clearState();
    setState(state);
  }

  return state;
};

export const clearState = () => {
  localStorage.clear();
}

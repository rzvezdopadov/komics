export const CreateModalInput = (callback) => {
  const elemModal = document.createElement('div');
  elemModal.classList.add('flexboxtype');
  elemModal.classList.add('module-modal');
  elemModal.id = 'module-modal';
  elemModal.addEventListener('click', () => {
    if (event.target !== event.currentTarget) return;

    const value = document.getElementById('module-modal-input').value;

    if (value && callback) callback(value);

    console.log('value:', value);
    document.getElementById('module-modal').remove();
  });

  const elemModalContent = document.createElement('div');
  elemModalContent.classList.add('flexboxtype');
  elemModalContent.classList.add('module-modal-content');
  elemModalContent.addEventListener('click', () => {});

  const elemModalClose = document.createElement('div');
  elemModalClose.classList.add('flexboxtype');
  elemModalClose.classList.add('module-modal-close');

  const elemModalCloseSpan = document.createElement('span');
  elemModalCloseSpan.innerHTML = '×';

  elemModalClose.appendChild(elemModalCloseSpan);
  elemModalClose.addEventListener('click', () => document.getElementById('module-modal').remove());

  const elemModalText = document.createElement('span');
  elemModalText.classList.add('flexboxtype');
  elemModalText.classList.add('module-modal-text');
  elemModalText.innerHTML = 'Enter title';

  const elemModalInput = document.createElement('input');
  elemModalInput.classList.add('module-modal-input');
  elemModalInput.id = 'module-modal-input';

  elemModalContent.appendChild(elemModalClose);
  elemModalContent.appendChild(elemModalText);
  elemModalContent.appendChild(elemModalInput);

  elemModal.appendChild(elemModalContent);

  document.getElementById('body').appendChild(elemModal);
  document.getElementById(elemModalInput.id).focus();
};

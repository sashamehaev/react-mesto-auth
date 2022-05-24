export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

export const cardListSelector = '.elements';
export const popupEditProfileSelector = '.popup_type_edit';
export const popupAddCardSelector = '.popup_type_add';
export const popupWithCardSelector = '.popup_type_card';
export const popupDeleteCardSelector = '.popup_type_delete';
export const popupEditAvatarSelector = '.popup_type_avatar';

export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonEditAvatar = document.querySelector('.profile__container-avatar');
export const buttonAddCard = document.querySelector('.profile__add-button');

export const formEditProfile = document.querySelector('.form_type_edit');
export const formAddCard = document.querySelector('.form_type_add');
export const formEditAvatar = document.querySelector('.form_type_avatar');


export const inputNamePopup = document.querySelector('.form__input_type_name');
export const inputAboutPopup = document.querySelector('.form__input_type_job');

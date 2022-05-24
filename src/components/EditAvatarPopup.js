import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
    const { isOpen, onClose } = props;
    const avatarRef = React.useRef();
    const currentUser = React.useContext(CurrentUserContext);

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar(avatarRef.current.value);
    }

    React.useEffect(() => {
        avatarRef.current.value = '';
    }, [currentUser]);

    return (
        <PopupWithForm onSubmit={handleSubmit} name="avatar" title="Обновить аватар"
          isOpen={isOpen}
          onClose={onClose}
        >
          <label className="form__field">
            <input ref={avatarRef} id="avatar-link-input" type="url" name="link" placeholder="Ссылка на картинку" className="form__input form__input_type_link" required />
            <span className="avatar-link-input-error form__input-error"></span>
          </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
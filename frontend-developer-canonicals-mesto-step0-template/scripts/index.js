// ������� �������� ��� �������������� ������� � ���������� ��������
const profileEditButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

// ������� ���-��� � �� ��������
const editProfilePopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const closeEditProfilePopup = editProfilePopup.querySelector(".popup__close");
const closeNewCardPopup = newCardPopup.querySelector(".popup__close");
const closeImagePopup = imagePopup.querySelector(".popup__close");

// ������� ����� � ���� ������ ���
const profileForm = document.querySelector(".popup__form[name='edit-profile']");
const profileNameInput = profileForm.querySelector(".popup__input_type_name");
const profileDescriptionInput = profileForm.querySelector(".popup__input_type_description");

const cardForm = document.querySelector(".popup__form[name='new-place']");
const cardNameInput = cardForm.querySelector(".popup__input_type_card-name");
const cardLinkInput = cardForm.querySelector(".popup__input_type_url");

// ������� ��������� ��� ��������
const cardContainer = document.querySelector(".places__list");

// ������� �������� ���-��� � ������������
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupTitle = imagePopup.querySelector(".popup__caption");

// ������������� ������� ��� �������� ���-���
function openModal(popup) {
    popup.classList.add("popup_is-opened");
    popup.classList.add("popup_is-animated");
}

// ������������� ������� ��� �������� ���-���
function closeModal(popup) {
    popup.classList.remove("popup_is-opened");
    popup.classList.remove("popup_is-animated");
}

// ������� ��� �������� ��������
function createCard(name, link) {
    const cardTemplate = document.querySelector("#card-template").content.cloneNode(true);
    const cardElement = cardTemplate.querySelector(".card");

    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    const likeButton = cardElement.querySelector(".card__like-button");
    const deleteButton = cardElement.querySelector(".card__delete-button");

    cardImage.src = link;
    cardImage.alt = name;
    cardTitle.textContent = name;

    // ���������� ��� ������ "����"
    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("card__like-button_is-active");
    });

    // ���������� ��� ������ "�������"
    deleteButton.addEventListener("click", () => {
        cardElement.remove();
    });

    // ���������� ����� �� �������� ��� �������� ���-��� � ������������
    cardImage.addEventListener("click", () => {
        imagePopupImage.src = link;
        imagePopupImage.alt = name;
        imagePopupTitle.textContent = name;
        openModal(imagePopup);
    });

    cardContainer.prepend(cardElement);
}

// ������� ��� ���������� ���� �������� �� ������� initialCards
function renderInitialCards() {
    initialCards.forEach(card => {
        createCard(card.name, card.link);
    });
}

// ����� ������� ��� ���������� �������� ��� �������� ��������
renderInitialCards();

// �������� ���-��� �������������� �������
profileEditButton.addEventListener("click", () => {
    profileNameInput.value = document.querySelector(".profile__title").textContent;
    profileDescriptionInput.value = document.querySelector(".profile__description").textContent;
    openModal(editProfilePopup);
});

// �������� ���-��� ���������� ��������
addCardButton.addEventListener("click", () => {
    cardNameInput.value = "";
    cardLinkInput.value = "";
    openModal(newCardPopup);
});

// �������� ���-��� �������������� �������
closeEditProfilePopup.addEventListener("click", () => {
    closeModal(editProfilePopup);
});

// �������� ���-��� ���������� ��������
closeNewCardPopup.addEventListener("click", () => {
    closeModal(newCardPopup);
});

// �������� ���-��� � ������������
closeImagePopup.addEventListener("click", () => {
    closeModal(imagePopup);
});

// ���������� �������� ����� �������������� �������
profileForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    document.querySelector(".profile__title").textContent = profileNameInput.value;
    document.querySelector(".profile__description").textContent = profileDescriptionInput.value;
    closeModal(editProfilePopup);
});

// ���������� �������� ����� ���������� ����� ��������
cardForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const cardName = cardNameInput.value;
    const cardLink = cardLinkInput.value;
    createCard(cardName, cardLink);
    closeModal(newCardPopup);
});

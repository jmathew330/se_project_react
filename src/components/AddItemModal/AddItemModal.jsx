import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import { useEffect } from "react";

function AddItemModal({ isOpen, onClose, onAddItemModalSubmit }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
  };

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather("");
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          onChange={handleImageChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">
          Select the weather type:
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              type="radio"
              className="modal__radio-input"
              id="hot"
              name="weather"
              value="hot"
              onChange={handleWeatherChange}
              checked={weather === "hot"}
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              className="modal__radio-input"
              id="warm"
              name="weather"
              value="warm"
              onChange={handleWeatherChange}
              checked={weather === "warm"}
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              type="radio"
              className="modal__radio-input"
              id="cold"
              name="weather"
              value="cold"
              onChange={handleWeatherChange}
              checked={weather === "cold"}
            />
            Cold
          </label>
        </legend>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;

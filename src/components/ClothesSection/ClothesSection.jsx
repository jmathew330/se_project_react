import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
function ClothesSection({ clothingItems, onCardClick, onAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__content">
        <p className="clothes-section__content_title">Your items</p>
        <button
          onClick={onAddClick}
          type="button"
          className="clothes-section__content__add--new-btn"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;

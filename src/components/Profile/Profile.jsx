import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
function Profile({ clothingItems, handleCardClick, handleAddClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={handleCardClick}
          onAddClick={handleAddClick}
        />
      </section>
    </div>
  );
}

export default Profile;

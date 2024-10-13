import { Search01Icon } from "hugeicons-react";
import "../assets/styles/SearchAndChoose.css";

const SerachAndChoose = () => {
  // const moodComp = () => {
  //     return(
  //         <>
  //             <div>

  //             </div>
  //         </>
  //     )
  // }

  return (
    <>
      <div class="search-and-choose">
        <div class="input-icon-wrapper">
          <input type="text" placeholder="Search..." />
          <Search01Icon size={"20"} className="iconsec" />
        </div>
        <div className="choose">
          <p className="choose-tittle">Choose a book according to your mood</p>
        </div>
        <div className="types-of-moods">
          <div className="mood-component">
            <img
              src="src/assets/images/profile-placeholder.jpg"
              alt="mood-icon"
            />
            Happiness
          </div>
          <div className="mood-component">
            <img
              src="src/assets/images/profile-placeholder.jpg"
              alt="mood-icon"
            />
            Romantic
          </div>
          <div className="mood-component">
            <img
              src="src/assets/images/profile-placeholder.jpg"
              alt="mood-icon"
            />
            Thriller
          </div>
        </div>
      </div>
    </>
  );
};

export default SerachAndChoose;

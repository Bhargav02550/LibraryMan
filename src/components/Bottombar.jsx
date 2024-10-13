import {
  BookOpen01Icon,
  BookOpen02Icon,
  Chatting01Icon,
  Home02Icon,
  MenuSquareIcon,
  ShoppingCart01Icon,
  ShoppingCart02Icon,
} from "hugeicons-react";
import "../assets/styles/Bottombar.css";

const Bottombar = () => {
  return (
    <>
      <div className="bottombar">
        <div className="icon">
          <Home02Icon size={"20"} />
        </div>
        <div className="icon">
          <MenuSquareIcon size={"20"} />
        </div>
        <div className="icon">
          <BookOpen01Icon size={"20"} />
        </div>
        <div className="icon">
          <ShoppingCart01Icon size={"20"} />
        </div>
        <div className="icon">
          <Chatting01Icon />
        </div>
      </div>
    </>
  );
};

export default Bottombar;

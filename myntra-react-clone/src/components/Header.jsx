import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const imageUrl = `${window.location.origin}/myntra_logo.webp`;
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img className="myntra_home" src={imageUrl} alt="Myntra Home" />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <Link to="" className="action_container">
          <CgProfile />
          <span className="action_name">Profile</span>
        </Link>
        <Link to="" className="action_container">
          <AiOutlineHeart />
          <span className="action_name">Wishlist</span>
        </Link>

        <Link to="/bag" className="action_container">
          <BsHandbag />
          <span class="action_name">Bag</span>
          {/* {bag.length == 0 ? (    
            ""
          ) : (
            <span className="bag-item-count">{bag.length}</span>
          )} */}
          {/* the lenght of array is always 0.Never be -ve. */}
          {/* {bag.length > 0 ? (
            <span className="bag-item-count">{bag.length}</span>
          ) : (
            ""
          )} */}
          {bag.length > 0 && (
            <span className="bag-item-count">{bag.length}</span>
          )}
        </Link>
      </div>
    </header>
  );
};
export default Header;

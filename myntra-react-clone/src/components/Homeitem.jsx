//  import itemImage from "../images/1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bagActions } from "../store/bagSlice";
import { GiShoppingBag } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Homeitem = ({ item, id }) => {
  const dispatch = useDispatch();

  const bag = useSelector((store) => store.bag);
  const handleAddToBag = () => {
    console.log("handle bag ", bag);
    dispatch(bagActions.addToBag(item.id));
  };
  const removeFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <Link to={`/${id}/${item.id}`}>
        <img className="item-image" src={item.image} alt="item image" />
      </Link>

      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      {/* {bag.includes(item.id) ? (
        <button
          type="button"
          className=" btn-remove-bag btn "
          onClick={removeFromBag}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <AiFillDelete />
            Remove
          </div>
        </button>
      ) : (
        <button
          type="button"
          className=" btn-add-bag btn "
          onClick={handleAddToBag}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <GiShoppingBag />
            Add to Bag
          </div>
        </button>
      )} */}
    </div>
  );
};
export default Homeitem;

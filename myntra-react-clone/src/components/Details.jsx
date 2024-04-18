import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GiShoppingBag } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
const Details = () => {
  const { id, itemId } = useParams();
  console.log(id, itemId);
  const items = useSelector((store) => store.items);
  console.log(items, !items);
  if (items.length === 0) {
    return (
      <center>
        <div style={{ margin: "350px 0px" }}>Item not found</div>
      </center>
    ); // Render a message if item is not found
  }
  const item1 = items.filter((item) => item.id === id);
  const itemOfProduct = item1[0];
  const product = item1[0] ? item1[0].product : null;
  // const product = item1[0].product;
  const FinalItemArray = product.filter((item) => item.id === itemId);
  const item = FinalItemArray[0] || null;
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  // const itemArray = items.filter((item) => item.id === itemId);
  // const item = itemArray[0];
  // const imageUrl = `/images/category_${categoryId}.png`;
  console.log(items);

  const handleAddToBag = () => {
    console.log("handle bag ", bag);
    dispatch(bagActions.addToBag(item.id));
  };
  // const removeFromBag = () => {
  //   dispatch(bagActions.removeFromBag(item.id));
  // };
  const imageUrl = `${window.location.origin}/${item.image}`;
  console.log(imageUrl);
  return (
    <center>
      <div className="item-container " style={{ margin: "150px 0px" }}>
        <Link to="">
          <img className="item-image" src={imageUrl} alt="item image" />
        </Link>
        {/* <img className="item-image" src={imageUrl} /> */}
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
        {bag.includes(item.id) ? (
          <Link to="/bag">
            <button type="button" className=" btn-add-bag btn ">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                GO TO BAG
                <AiOutlineArrowRight />
              </div>
            </button>
          </Link>
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
              <GiShoppingBag /> Add to Bag
            </div>
          </button>
        )}
      </div>
    </center>
  );
};
export default Details;

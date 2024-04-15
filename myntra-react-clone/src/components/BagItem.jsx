import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect } from "react";
const BagItem = ({ item }) => {
  // Get the current date
  const newDate = new Date();

  // Add 7 days to the current date
  const currentDate = new Date(newDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Format the date
  const delivaryDate = `${month} ${day}, ${year}`;
  // Get the current date

  // Get the month, day, and year
  // const monthAbbreviation = currentDate.toLocaleString("default", {
  //   month: "short",
  // });
  // const day = currentDate.getDate();
  // const year = currentDate.getFullYear().toString().substr(-2); // Get last two digits of the year

  // Format the date
  // const delivaryDate = `${monthAbbreviation} ${day}, '${year}`;

  const dispatch = useDispatch();
  const removeFromBagId = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  const imageUrl = `${window.location.origin}/${item.image}`;
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={imageUrl} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            (${item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">
            {/* {item.delivery_date} */}
            {` ${delivaryDate}`}
          </span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={removeFromBagId}>
        <RiDeleteBin6Line />
      </div>
    </div>
  );
};
export default BagItem;

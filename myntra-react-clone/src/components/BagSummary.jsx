import { useSelector } from "react-redux";
const BagSummary = ({ bagItems }) => {
  const items = useSelector((store) => store.items);
  const bag = useSelector((store) => store.bag);
  // const bagItems = items.filter((item) => bag.includes(item.id));
  const CONVENIENCE_FEES = 99;
  let totalItem = 0,
    totalMRP = 0,
    totaldiscount = 0,
    finalPayment = 0,
    totalDiscount = 0,
    totalPrice = 0,
    totalcurrprice = 0;

  bagItems.forEach((item) => {
    totalPrice += item.original_price;
    totalcurrprice += item.current_price;
  });
  totaldiscount = totalPrice - totalcurrprice;

  (totalItem = bagItems.length),
    (totalMRP = totalPrice),
    (totalDiscount = totaldiscount),
    (finalPayment = totalPrice - totaldiscount + CONVENIENCE_FEES);

  return (
    <div className="bag-summary  ">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;

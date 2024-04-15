import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import OmgDeals from "./OmgDeals";
const FirstHome = () => {
  const items = useSelector((store) => store.items);
  console.log(items);
  const omgDeals = items.filter((item) => item.type === "OMGDEALS");
  const categoryDeals = items.filter((item) => item.type === "CATEGORIES");
  console.log("itens Json", items, omgDeals, categoryDeals);

  return (
    <>
      <div className="banner_container">
        <img className="banner_image" src="banner.jpg" alt="Main Banner" />
      </div>
      <div className="category_heading">GRAND GLOBAL BRANDS</div>
      <div className="category_items">
        {omgDeals.map((item) => (
          <OmgDeals item={item} />
        ))}
      </div>
      <div className="category_heading">SHOP BY CATEGORY</div>
      <div className="category_items">
        {categoryDeals.map((item) => (
          <OmgDeals item={item} />
        ))}
      </div>
    </>
  );
};
export default FirstHome;

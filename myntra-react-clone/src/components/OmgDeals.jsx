import { Link } from "react-router-dom";
const OmgDeals = ({ item }) => {
  console.log("cat gary obj", item, item.id, item.SRC);
  return (
    <>
      <Link to={`/${item.id}`}>
        <img className="sale_item" src={item.SRC} />
      </Link>
    </>
  );
};
export default OmgDeals;
//

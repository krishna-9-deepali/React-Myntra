import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GiShoppingBag } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import Homeitem from "./Homeitem";
const DisplayItemsBycat = () => {
  const { itemId } = useParams();
  const items = useSelector((store) => store.items);
  console.log(items);
  // if (items.length === 0) {
  //   return (
  //     <center>
  //       <div style={{ margin: "350px 0px" }}>Item not found</div>
  //     </center>
  //   ); // Render a message if item is not found
  // }
  const item = items.filter((item) => item.id === itemId);
  const itemOfProduct = item[0];
  const product = item[0].product;
  // if (!product) {
  //   return (
  //     <center>
  //       <div style={{ margin: "350px 0px" }}>Item not found</div>
  //     </center>
  //   ); // Render a message if item is not found
  // }
  console.log("dispaly items", items, item, product);
  // const bag = useSelector((store) => store.bag);
  // const dispatch = useDispatch();
  return (
    <div className="items-container topMargin">
      {product.map((itemproduct) => (
        <Homeitem item={itemproduct} id={itemOfProduct.id} />
      ))}
    </div>
  );
};
export default DisplayItemsBycat;

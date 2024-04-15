import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "../Bag.module.css";

const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  console.log(items);
  // const bagobj = bag.map((id) => {
  //   return items.filter((item) => item.id === id);
  // });

  //code to navigate if bag  cart is empty.

  // const navigate = useNavigate();
  // if (bag.length === 0) {
  //   navigate("/");
  // }
  const bagobj = bag.map((id) => {
    return items.find((item) => item.id === id);
  });
  console.log("items got.....", bagobj);

  const finalItem = items.filter((item) => {
    return bag.includes(item.id);
  });

  const fi = items.filter((item) => {
    const itemIndex = bag.indexOf(item.id);
    return itemIndex >= 0;
    // return bag.indexOf(item.id) >= 0;
  });

  return (
    <>
      <header className={styles.headerBag}>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <div>
          <span className={`${styles.bag} ${styles.bagAddpay}`}>BAG</span>
          <span className={styles.bagAddpay}>---------ADDRESS---------</span>
          <span className={styles.bagAddpay}>PAYMENT</span>
        </div>

        <div className={`${styles.myntraHome} ${styles.secure}`}>
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            class="secureIcon"
            width="26"
            height="28"
          />
          <span className={styles.guarenty}> 100% SECURE </span>
        </div>
      </header>
      {bag.length > 0 ? (
        <main className={styles.mainBag}>
          <div className="bag-page mb-5 ">
            <div className="bag-items-container">
              {/* {bagobj.map((item) => (
            <BagItem item={item[0]} />
          ))} */}
              {finalItem.map((item) => (
                <BagItem item={item} />
              ))}
            </div>
            <BagSummary />
          </div>
        </main>
      ) : (
        <main className={styles.mainBagZeroItem}>
          <img
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.png"
            class="image-base-imgResponsive"
            alt="image"
            style={{ width: "10%" }}
          />
          <div className={styles.emptyCartText}>Hey, it feels so light!</div>
          <div className={styles.emptyCartDes}>
            There is nothing in your bag. Let's add some items.
          </div>
          <Link to="/">
            <button>ADD ITEMS</button>
          </Link>
        </main>
      )}

      <footer className={styles.footerBagItems}>
        <div> need help? contact us</div>
      </footer>
    </>
  );
};
export default Bag;

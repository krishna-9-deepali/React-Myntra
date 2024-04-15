import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "../Bag.module.css";

const BagRoute = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  let products = [] || null,
    productItem = [];
  let bagItems = [];
  items.forEach((item) => {
    products = item.product;
    for (const itemProduct of products) {
      productItem.push(itemProduct);
    }
  });
  bag.forEach((id) => {
    console.log(id);
    const bagObj = productItem.filter((item) => item.id === id); //array of obj.
    bagItems.push(bagObj[0]);
  });

  const imageUrl = `${window.location.origin}/myntra_logo.webp`;
  return (
    <>
      <header className={styles.headerBag}>
        <div className="logo_container">
          <Link to="/">
            <img className="myntra_home" src={imageUrl} alt="Myntra Home" />
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
              {bagItems.map((item) => (
                <BagItem item={item} />
              ))}
              {/* {finalItem.map((item) => (
                <BagItem item={item} />
              ))} */}
            </div>
            <BagSummary bagItems={bagItems} />
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
export default BagRoute;

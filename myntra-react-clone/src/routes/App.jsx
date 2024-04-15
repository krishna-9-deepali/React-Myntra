import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import FetchItem from "../components/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpiner from "../components/LoadingSpiner";
function App() {
  const fetchStatus = useSelector((store) => store.fetchingStatus);
  console.log("status of fetching", fetchStatus.currentlyFetching);
  return (
    <>
      <Header />
      {/* <FetchItem /> */}
      {fetchStatus.currentlyFetching ? <LoadingSpiner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;

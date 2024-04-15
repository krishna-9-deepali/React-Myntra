import "bootstrap/dist/css/bootstrap.min.css";

const LoadingSpiner = () => {
  return (
    <div
      className="d-flex justify-content-center spinner"
      style={{ marginTop: "5rem" }}
    >
      <div
        className="spinner-border"
        role="status"
        style={{ width: "15rem", height: "15rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpiner;

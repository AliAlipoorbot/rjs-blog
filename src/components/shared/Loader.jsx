import FadeLoader from "react-spinners/FadeLoader";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "1000px",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <FadeLoader color="#1976d2" />
    </div>
  );
}

export default Loader;

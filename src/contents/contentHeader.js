import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ContentHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "2%",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "2%",
        top: 0,
        backgroundColor: "#D9E0E8",
      }}
    >
      <div className="contentHeaderLeft">Logo</div>

      <div className="contentHeaderRight">
        <button type="button" class="btn btn-outline-info btn-sm">
          Login
        </button>
      </div>
    </div>
  );
};

export default ContentHeader;

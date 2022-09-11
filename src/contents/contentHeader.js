import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ContentHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "1%",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "1%",
        backgroundColor: "#FFFFFF",
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

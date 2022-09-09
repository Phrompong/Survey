const ContentHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "2%",
        marginLeft: "5%",
        marginRight: "5%",
        top: 0,
      }}
    >
      <div className="contentHeaderLeft">
        <img
          style={{ borderRadius: "50%", width: "10%" }}
          src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
          alt="Avatar"
        ></img>
      </div>
      <div className="contentHeaderRight">
        <img
          style={{ borderRadius: "50%", width: "10%" }}
          src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
          alt="Avatar"
        ></img>
        {/* <h6>Login</h6> */}
      </div>
    </div>
  );
};

export default ContentHeader;

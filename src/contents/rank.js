const Rank = () => {
  const data = [];

  for (let index = 1; index <= 10; index++) {
    data.push({
      image:
        "https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?b=1&k=20&m=1322277517&s=170667a&w=0&h=BSN_5NMGYJY2qPwI3_vOcEXVSX_hmGBOmXebMBxTLX0=",
      title: index,
      detail: "detail",
    });
  }

  const ranks = [];
  for (const obj of data) {
    const { title } = obj;
    ranks.push(
      <div style={{ display: "flex", justifyContent: "flex-start", gap: "2%" }}>
        <div
          style={{
            borderRadius: "40%",
            backgroundColor: "#04AA6D",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          {title}
        </div>
        <div>Details</div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "50% 50%",
        gap: "1%",
      }}
    >
      {ranks}
    </div>
  );
};

export default Rank;

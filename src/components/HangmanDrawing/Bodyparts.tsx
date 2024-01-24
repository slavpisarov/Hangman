const BODY_PARTS = [
    (
      <div
        key="HEAD"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          border: "10px solid black",
          position: "absolute",
          top: "50px",
          right: "-30px",
        }}
      ></div>
    ),
  
    (
      <div
        key="BODY"
        style={{
          width: "10px",
          height: "100px",
          background: "black",
          position: "absolute",
          top: "120px",
          right: 0,
        }}
      ></div>
    ),
  
    (
      <div
        key="RIGHT_ARM"
        style={{
          width: "100px",
          height: "10px",
          background: "black",
          position: "absolute",
          top: "150px",
          right: "-100px",
          transform: "rotate(-30deg)",
          transformOrigin: "left bottom",
        }}
      ></div>
    ),
  
    (
      <div
        key="LEFT_ARM"
        style={{
          width: "100px",
          height: "10px",
          background: "black",
          position: "absolute",
          top: "150px",
          right: "10px",
          transform: "rotate(30deg)",
          transformOrigin: "right bottom",
        }}
      ></div>
    ),
  
    (
      <div
        key="RIGHT_LEG"
        style={{
          width: "100px",
          height: "10px",
          background: "black",
          position: "absolute",
          top: "300px",
          right: "-40px",
          transform: "rotate(60deg)",
          transformOrigin: "right bottom",
        }}
      ></div>
    ),
  
    (
      <div
        key="LEFT_LEG"
        style={{
            width:"100px",
            height:"10px",
            background:"black",
            position:"absolute",
            top:"300px",
            right: "-50px",
            rotate:"-60deg",
            transformOrigin:"LEFT bottom"
        }}
      ></div>
    ),
  ];
  
  export default BODY_PARTS;
  
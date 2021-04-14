import React from "react";

function Divider({ children }) {
  return (
    <div
      style={{
        height: 150,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
      }}
      className="divider"
    >
      {children}
    </div>
  );
}

export default Divider;

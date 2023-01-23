import React from "react";

function Footer() {
  // Footer Component
  return (
    <div
      style={{
        borderTop: "1px solid #cddfff",
        marginTop: "2em",
        padding: "2em",
      }}
    >
      <center>
        <h6 style={{ color: "#012970" }}>
          © Copyright NiceAdmin. All Rights Reserved
        </h6>
        <p style={{ color: "#012970" }}>
          Designed by{" "}
          <a target="_blank" href="https://bootstrapmade.com/" rel="noreferrer">
            BootstrapMade
          </a>
        </p>
      </center>
    </div>
  );
}

export default Footer;

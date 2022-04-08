import React from "react";
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="sec4-wrapper">
        <div className="container sec-4">
          <div className="row m">
            {/* <div className="social">
              <span style="--color: #3b5998">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span style="--color: #00acee">
                <i className="fab fa-twitter"></i>
              </span>
              <span style="--color: #ff0000">
                <i className="fab fa-youtube"></i>
              </span>

              <span
                style="
          --image: linear-gradient(
            to right bottom,
            #4c68d7,
            #815dc8,
            #a253b5,
            #b84aa0,
            #c64589,
            #d34a7c,
            #dc526f,
            #e25d62,
            #ed6f5b,
            #f58355,
            #fa9851,
            #fbad50
          );
        "
              >
                <i className="fab fa-instagram"></i>
              </span>
              <span style="--color: #25d366">
                <i className="fab fa-whatsapp"></i>
              </span>
              <span style="--color: #0088cc">
                <i className="fab fa-telegram-plane"></i>
              </span>
              <span style="--color: #6441a5">
                <i className="fab fa-twitch"></i>
              </span>
            </div> */}

            <div className="col-md-3">
              <a href="https://twitter.com/geekedgorilla/status/1487915370568732675?s=21">
                <span className="twitter" style={{ "--color": "#00acee" }}>
                  <i className="fab fa-twitter"></i>
                </span>
              </a>
            </div>
            <div className="col-md-3">
              <a href="https://discord.gg/6QKNnrAE">
                <span className="discord" style={{ "--color": "rgb(0, 110, 255)" }}>
                  <i className="fab fa-discord"></i>
                </span>
              </a>
            </div>
            <div className="col-md-3">
              <a href="https://www.instagram.com/invites/contact/?i=15ftwpmmml94z&utm_content=nlzjrsx">
                <span className="insta" style={{
                  "--image": "linear-gradient(to right bottom,#4c68d7,#815dc8,#a253b5,#b84aa0,#c64589,#d34a7c,#dc526f,#e25d62,#ed6f5b,#f58355,#fa9851,#fbad50)"
                }}>
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </div>
          </div>
          <span className="span">Geeked Gorillas || @copyright reserved to CoderBoyRahmat</span>
        </div>
      </div>
    </div >
  );
};

export default Footer;

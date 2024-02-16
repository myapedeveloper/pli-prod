import React from "react";

const Footer = () => {
  return (
    <footer class="footer footer-3">
      <div class="copyright pt-25 pb-25">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 text-center text-lg-start">
              <a href="index.html" class="p-0 m-0">
                <h2>PLI Calculator</h2>
              </a>
            </div>
            <div class="col-lg-5 text-center my-3 my-sm-0">
              <div class="copyright-text">
                <p>
                  Copyright&copy; PLI Calculator 2024. <br class="d-sm-none" />
                  <a class="ms-0" href="/">
                    Designed By CCDM & My Ape Developer
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end ">
              <div class="social-button">
                <a href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i class="fab fa-pinterest-p"></i>
                </a>
                <a href="/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

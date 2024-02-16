import React from "react";

const Header = () => {
  return (
    <header class="header">
      <div class="header-menu header-menu-4" id="sticky">
        <nav class="navbar navbar-expand-lg ">
          <div class="container">
            <a class="navbar-brand sticky_logo" href="index.html">
              <h2 style={{ padding: "20px" }}>PLI Calculator</h2>
            </a>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="menu_toggle">
                <span class="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span class="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const BannerSection = () => {
  return (
    <>
      <section class="banner-area-5" id="banner_animation">
        <div class="bg-shapes">
          <div class="shape" data-parallax='{ "x": -30,"y": 90,"rotateZ":50}'>
            <img
              class="layer"
              data-depth="-0.06"
              src="img/home-4/shape-2.png"
              alt=""
            />
          </div>
          <div class="shape" data-parallax='{ "y": -250}'>
            <img
              class="layer"
              data-depth="-0.15"
              src="img/home-4/shape-3.png"
              alt=""
            />
          </div>
          <div class="shape" data-parallax='{"x": -40, "y": -150}'>
            <img
              class="layer"
              data-depth="-0.3"
              src="img/home-4/shape-4.png"
              alt=""
            />
          </div>
          <div
            class="shape"
            data-parallax='{"x": 300, "y": 370, "rotateZ":200}'
          >
            <img
              class="layer"
              data-depth="0.5"
              src="img/home-4/shape-5.png"
              alt=""
            />
          </div>

          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <div class="container">
          <div class="row align-items-end pt-170 pb-120">
            <div class="col-lg-6">
              <div class="banner-content wow fadeInRight" data-wow-delay="0.1s">
                <h1>
                  Calculate Your PLI Premium Today With our
                  <span class="underline-shape">PLI Calculator</span>
                </h1>
                <p>
                  Quickly estimate your Postal Life Insurance premium with our
                  easy-to-use PLI Calculator. Get tailored coverage without the
                  hassle.
                </p>

                <div class="d-flex flex-wrap mt-40">
                  <a href="/" class="theme-btn me-4">
                    Try It Now
                  </a>
                  <a href="/" class="under_link">
                    Know More <i class="arrow_right"></i>
                  </a>
                </div>
                <div class="co-operators">
                  <p class="mb-4">We are cooperating with:</p>
                  <div class="d-flex flex-wrap">
                    <a href="/">
                      <img src="img/home-4/cooperator-1.png" alt="" />
                    </a>
                    <a href="/">
                      <img src="img/home-4/cooperator-2.png" alt="" />
                    </a>
                    <a href="/">
                      <img src="img/home-4/cooperator-3.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="basic-loan-calculator wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <img class="shape" src="img/home-4/shape-1.png" alt="" />
                <h4>PLI calculator</h4>
                <form action="#" class="d-flex flex-column">
                  <div class="mb-3">
                    <label class="label" for="calculator-select">
                      Select A Calculator
                    </label>
                    <select class="nice-select w-100" id="calculator-select">
                      <option selected disabled>
                        Select a Calculator
                      </option>
                      <option value="PLI">PLI Calculator</option>
                      <option value="RPLI">RPLI Calculator</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label class="label" for="scheme-select">
                      Select Scheme
                    </label>
                    <select
                      class="nice-select w-100"
                      id="scheme-select"
                      disabled
                    >
                      <option selected disabled>
                        Select a Calculator first
                      </option>
                    </select>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="label" for="date-of-birth">
                          Date of Birth
                        </label>
                        <div class="input-field">
                          <input
                            type="date"
                            id="date-of-birth"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="label" for="loan-time">
                          For how long (years)
                        </label>
                        <div class="input-field">
                          <input
                            type="text"
                            id="loan-time"
                            placeholder="For how long (years)"
                            class="form-control"
                            pattern="[0-9]*"
                            title="Please enter numbers only"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-4">
                    <label class="label" for="loan-repayment">
                      Sum Assured
                    </label>
                    <div class="input-field">
                      <span>₹</span>
                      <input
                        type="text"
                        id="loan-repayment"
                        placeholder="Enter amount"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <button type="submit" class="theme-btn w-100">
                    Calculate Your PLI
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;

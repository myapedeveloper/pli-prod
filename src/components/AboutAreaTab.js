import React from "react";

const AboutAreaTab = () => {
  return (
    <>
      {" "}
      <section class="about-tab-area bg-white">
        <div class="container">
          <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="freelancer-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#freelancer"
                  type="button"
                  role="tab"
                  aria-controls="freelancer"
                  aria-selected="true"
                >
                  Freelancers
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="startup-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#startup"
                  type="button"
                  role="tab"
                  aria-controls="startup"
                  aria-selected="false"
                >
                  {" "}
                  SMBs & Startups
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="business-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#business"
                  type="button"
                  role="tab"
                  aria-controls="business"
                  aria-selected="false"
                >
                  Business Founders
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="micro_business-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#micro_business"
                  type="button"
                  role="tab"
                  aria-controls="micro_business"
                  aria-selected="false"
                >
                  {" "}
                  Micro businesses
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="freelancer"
              role="tabpanel"
              aria-labelledby="freelancer-tab"
            >
              <div class="row align-items-center">
                <div class="col-lg-5">
                  <div class="section-title text-start">
                    <h1>
                      Access to secure
                      <span class="underline-shape">banking</span>
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and the
                      typesetting industry. Lorem Ipsum has been industry's
                    </p>
                    <a class="read-more" href="/">
                      Get started now <i class="arrow_right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-7">
                  <img
                    class="img-fluid"
                    src="img/home-4/freelance-tab.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="startup"
              role="tabpanel"
              aria-labelledby="startup-tab"
            >
              <div class="row align-items-center">
                <div class="col-lg-5">
                  <div class="section-title text-start">
                    <h1>
                      Manage your cash
                      <span class="underline-shape">easily</span>
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and the
                      typesetting industry. Lorem Ipsum has been industry's
                    </p>
                    <a class="read-more" href="/">
                      Get started now <i class="arrow_right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-7">
                  <img
                    class="img-fluid"
                    src="img/home-4/freelance-tab-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="business"
              role="tabpanel"
              aria-labelledby="business-tab"
            >
              <div class="row align-items-center">
                <div class="col-lg-5">
                  <div class="section-title text-start">
                    <h1>
                      Access to secure
                      <span class="underline-shape">banking</span>
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and the
                      typesetting industry. Lorem Ipsum has been industry's
                    </p>
                    <a class="read-more" href="/">
                      Get started now <i class="arrow_right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-7">
                  <img
                    class="img-fluid"
                    src="img/home-4/freelance-tab.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="micro_business"
              role="tabpanel"
              aria-labelledby="micro_business-tab"
            >
              <div class="row align-items-center">
                <div class="col-lg-5">
                  <div class="section-title text-start">
                    <h1>
                      Manage your cash
                      <span class="underline-shape">easily</span>
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and the
                      typesetting industry. Lorem Ipsum has been industry's
                    </p>
                    <a class="read-more" href="/">
                      Get started now <i class="arrow_right"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-7">
                  <img
                    class="img-fluid"
                    src="img/home-4/freelance-tab-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaTab;

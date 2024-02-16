import React from "react";

const AboutArea = () => {
  return (
    <>
      <section class="about-area bg-white">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="cash-img">
                <img
                  class="img-fluid"
                  src="img/home-4/manage-cash-img.png"
                  alt=""
                />
                <img
                  class="msg-1 wow fadeInRight"
                  data-wow-delay="0.1s"
                  src="img/home-4/basic-info-2.png"
                  alt=""
                />
                <img
                  class="msg-2 wow fadeInRight"
                  data-wow-delay="0.3s"
                  src="img/home-4/basic-info-3.png"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-5 wow fadeInLeft">
              <div class="section-title text-start">
                <span class="short-title-2">_WHY PLI Calculator ?</span>
                <h1 class="mb-3">
                  Manage your cash <span class="underline-shape">easily</span>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and the
                  typesetting industry. Lorem Ipsum has been industry's
                </p>
                <ul class="list-unstyled feature-list">
                  <li>
                    {" "}
                    <i class="fas fa-check-circle"></i> Inventore veritatis et
                    architecto beatae
                  </li>
                  <li>
                    {" "}
                    <i class="fas fa-check-circle"></i> Tempor egestas morbi
                    pulvinar amet
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;

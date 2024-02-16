import React from "react";

const Faq = () => {
  return (
    <>
      <section class="faq-area-3">
        <div class="container">
          <div class="row gy-lg-0 gy-4">
            <div class="col-lg-6">
              <img
                class="faq-img img-fluid"
                src="img/home-4/faq-Img.png"
                alt=""
              />
            </div>
            <div class="col-lg-6 pl-lg-50">
              <span class="subtitle">_FAQ</span>
              <h1>
                Frequently asked general{" "}
                <span class="underline-shape">questions</span>
              </h1>

              <div class="faq-widget">
                <div class="accordion" id="accordionExample">
                  <div class="single-faq wow fadeInUp" data-wow-delay="0.1s">
                    <div class="w-100">
                      <div class="faq-header" id="headingOne">
                        <h4
                          class="mb-0"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-controls="collapseOne"
                        >
                          Can I pay off my loan early?<i class="icon_plus"></i>
                          <i class=" icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="single-faq wow fadeInUp" data-wow-delay="0.3s">
                    <div class="w-100">
                      <div class="faq-header" id="headingTwo">
                        <h4
                          class="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-controls="collapseTwo"
                        >
                          How much can I PLI Calculator?
                          <i class="icon_plus"></i>
                          <i class=" icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="single-faq wow fadeInUp" data-wow-delay="0.5s">
                    <div class="w-100">
                      <div class="faq-header" id="headingThree">
                        <h4
                          class="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-controls="collapseThree"
                        >
                          Do you offering refinancing ?<i class="icon_plus"></i>
                          <i class=" icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="single-faq wow fadeInUp" data-wow-delay="0.7s">
                    <div class="w-100">
                      <div class="faq-header" id="headingFour">
                        <h4
                          class="mb-0 collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-controls="collapseFour"
                        >
                          Can I do all of my banking with you?
                          <i class="icon_plus"></i>
                          <i class=" icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="faq-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 class="more-contact">
                  Have more question ? <a href="/">Contact Us</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;

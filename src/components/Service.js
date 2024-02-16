import React from "react";

const Service = () => {
  return (
    <>
      <section class="services-area bg-white pt-120 pb-120 wow fadeInUp">
        <div class="container">
          <div class="section-title mb-45">
            <span class="short-title-2">_SERVICE COMPARISONS</span>
            <h1>
              Our better <span class="underline-shape">services</span>
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              <br />
              but the majority have suffered alteration in some form,
            </p>
          </div>

          <div class="table-responsive">
            <table class="table table-borderless mb-0">
              <thead>
                <tr>
                  <th class="feature-head" scope="col"></th>
                  <th class="text-center" scope="col">
                    <img src="img/logo/Logo-2.png" alt="" />
                  </th>
                  <th class="text-center" scope="col">
                    Other Companies
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="feature-head" scope="col">
                    Payment Per Transaction
                  </th>
                  <td class="feature-item">0.50/per transacrion</td>
                  <td class="feature-item">1.50/per transaction</td>
                </tr>
                <tr>
                  <th class="feature-head" scope="row">
                    Bank account limitations
                  </th>
                  <td class="feature-item">up to 10 bank accounts</td>
                  <td class="feature-item">Only 3 bank accounts</td>
                </tr>
                <tr>
                  <th class="feature-head" scope="row">
                    Local fees capped at NGN 2,000
                  </th>
                  <td class="feature-item">
                    {" "}
                    <i class="fas fa-check-circle"></i>{" "}
                  </td>
                  <td class="feature-item">
                    {" "}
                    <i class="fas fa-times-circle"></i>
                  </td>
                </tr>
                <tr>
                  <th class="feature-head" scope="row">
                    Loan Purchase
                  </th>
                  <td class="feature-item">easy to follow steps</td>
                  <td class="feature-item">complicated steps</td>
                </tr>
                <tr>
                  <th class="feature-head" scope="row">
                    Debt Financing
                  </th>
                  <td class="feature-item">
                    {" "}
                    <i class="fas fa-check-circle"></i>{" "}
                  </td>
                  <td class="feature-item">
                    {" "}
                    <i class="fas fa-times-circle"></i>
                  </td>
                </tr>
                <tr>
                  <th class="feature-head" scope="row">
                    No hidden fees or charges
                  </th>
                  <td class="feature-item">
                    {" "}
                    <i class="fas fa-check-circle"></i>{" "}
                  </td>
                  <td class="feature-item">
                    {" "}
                    <i class="fas fa-times-circle"></i>
                  </td>
                </tr>
                <tr>
                  <th class="feature-head" scope="row">
                    Local fees capped
                  </th>
                  <td class="feature-item">
                    {" "}
                    <i class="fas fa-check-circle"></i>{" "}
                  </td>
                  <td class="feature-item">
                    {" "}
                    <i class="fas fa-times-circle"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="pt-120 stat-view">
            <div class="row gy-md-0 gy-4">
              <div class="col-md-4 border-end">
                <h1 class="counter">
                  <span>400</span> K
                </h1>
                <p>Total active customers</p>
              </div>
              <div class="col-md-4">
                <h1 class="counter">
                  <span>100</span>M+
                </h1>
                <p>Order success rate</p>
              </div>
              <div class="col-md-4 border-start">
                <h1 class="counter">
                  <span class="counter">95.87</span>%
                </h1>
                <p>Avg. new projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;

import "./styles/style.scss";

import {
  handleScrollToTop,
  handleDate,
  handleNewArrivals,
} from "./handlers/handlers";

window.addEventListener("DOMContentLoaded", () => {
  // setting footer date
  handleDate();

  // adding scroll to top functionality
  window.addEventListener("scroll", handleScrollToTop);

  // add new arrivals to all products
  document
    .getElementById("all-products")
    .addEventListener("click", handleNewArrivals);
});

import "./styles/style.scss";
import createMainModule from "./handlers/handlers";
window.addEventListener("DOMContentLoaded", () => {
  const mainModule = createMainModule()
  // setting footer date
  mainModule.handleDate();
  // adding scroll to top functionality
  window.addEventListener("scroll", mainModule.handleScrollToTop);
  // add new arrivals to all products
  document
    .getElementById("all-products")
    .addEventListener("click", mainModule.handleNewArrivals);
});
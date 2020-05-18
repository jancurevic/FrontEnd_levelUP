const createMainModule = function() {
  const scrollToTop = document.querySelector(".scroll-to-top");
  const date = document.getElementById("footer-date");
  const newArrivalsContainer = document.getElementById(
    "new-arrivals-container"
  );
  const handleScrollToTop = () => {
    window.pageYOffset > window.innerHeight / 2
      ? scrollToTop.classList.remove("hide")
      : scrollToTop.classList.add("hide");
  };
  const handleDate = () => {
    date.textContent = new Date().getFullYear();
  };
  const addNewArrival = () => {
    const newArrival = document.createElement("div");
    newArrival.classList.add(
      "card",
      "new__card",
      "col-12",
      "col-sm-6",
      "col-md-4",
      "col-lg-3"
    );
    newArrival.innerHTML = `
  <a href="#"><img class="card-img-top w-90" src="https://picsum.photos/id/${Math.round(Math.random() * 999)}/309/390" alt="Coat" /></a>
  <div class="card-body">
    <a class="card-text new__product-name" href="#">Coat</a>
    <span class="card-text price">$49.99</span>
  </div>
`;
    return newArrival;
  };
  const handleNewArrivals = () => {
    const newFragment = document.createDocumentFragment();
    for (let i = 0; i < 4; i++) {
      newFragment.appendChild(addNewArrival());
    }
    newArrivalsContainer.appendChild(newFragment);
  };
  return {
    handleScrollToTop,
    handleDate,
    handleNewArrivals,
  };
};
export default createMainModule;
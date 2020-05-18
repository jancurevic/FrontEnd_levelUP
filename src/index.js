import "./styles/style.scss";
import createMainModule from "./scripts/handlers";
import { Server } from "miragejs";

new Server({
  routes() {
    this.namespace = "api";
    // change timing value to get the data faster
    this.timing = 1000;
    this.get("/all-items", () => {
      return {
        featuredItems: [
          {
            name: "Blue Rain Coat",
            price: "$109.99",
            url: `https://picsum.photos/id/111/268/338`, // doesn't work - url: 'assets/pics/1.jpg',
          },
          {
            name: "Red Rain Coat",
            price: "$109.99",
            url: `https://picsum.photos/id/112/268/338`,
          },
          {
            name: "Yellow Rain Coat",
            price: "$109.99",
            url: `https://picsum.photos/id/113/268/338`,
          },
          {
            name: "Green Rain Coat",
            price: "$109.99",
            url: `https://picsum.photos/id/114/268/338`,
          },
          {
            name: "White Rain Coat",
            price: "$109.99",
            url: `https://picsum.photos/id/115/268/338`,
          },
          {
            name: "Black Rain Coat",
            price: "$109.99",
            url: `https://picsum.photos/id/116/268/338`,
          },
        ],
        newArrivals: [
          {
            name: "Blue Coat",
            price: "$49.99",
            url: `https://picsum.photos/id/117/309/390`,
          },
          {
            name: "Red Coat",
            price: "$49.99",
            url: `https://picsum.photos/id/118/309/390`,
          },
          {
            name: "Yellow Coat",
            price: "$49.99",
            url: `https://picsum.photos/id/200/309/390`,
          },
          {
            name: "Green Coat",
            price: "$49.99",
            url: `https://picsum.photos/id/300/309/390`,
          },
        ],
        dress: `https://picsum.photos/id/400/536/630`,
        back2school: `https://picsum.photos/id/500/380/310`,
        jewelery: `https://picsum.photos/id/600/380/310`,
        sunglasses: `https://picsum.photos/id/700/770/310`,
      };
    });
  },
});

window.addEventListener("DOMContentLoaded", () => {
  const mainModule = createMainModule();
  // setting footer date
  mainModule.handleDate();
  // adding scroll to top functionality
  window.addEventListener("scroll", mainModule.handleScrollToTop);
  // add new arrivals to all products
  document
    .getElementById("all-products")
    .addEventListener("click", mainModule.handleNewArrivals);

  document.querySelector("#main-section").style.display = "none";

  fetch("/api/all-items")
    .then((data) => JSON.parse(data._bodyInit))
    .then((json) => {
      const {
        featuredItems,
        newArrivals,
        dress,
        back2school,
        jewelery,
        sunglasses,
      } = json;
      document.querySelectorAll(".featured-item").forEach((e, index) => {
        e.src = featuredItems[index].url;
      });
      document.querySelectorAll(".new-arrival").forEach((e, index) => {
        e.src = newArrivals[index%4].url;
      });
      document.getElementById('back2school').src=back2school;
      document.getElementById('dress').src=dress;
      document.getElementById('jewelery').src=jewelery;
      document.getElementById('sunglasses').src=sunglasses;
    })
    .catch(() => {
      document.querySelector(".error").style.display = "block";
    })
    .finally(() => {
      document.querySelector("#main-section").style.display = "block";
      document.querySelector(".loader").style.display = "none";
    });
});

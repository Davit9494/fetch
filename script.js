const input = document.querySelector(".input");
const button = document.querySelector(".button");
const body = document.body;
function createElement(tag, parent, attributes, text) {
  const elem = document.createElement(tag);
  if (attributes) {
    for (atr in attributes) {
      elem.setAttribute(atr, attributes[atr]);
    }
  }
  elem.innerHTML = text;
  parent.append(elem);
  return elem;
}
const mainDiv = createElement(
  "div",
  body,
  {
    class: "mainDiv",
  },
  ""
);
const cardDiv = createElement(
  "div",
  mainDiv,
  {
    class: "cardDiv",
  },
  ""
);
const capital = createElement(
  "div",
  cardDiv,
  {
    class: "capital cardInfo",
  },
  ""
);
const population = createElement(
  "div",
  cardDiv,
  {
    class: "population cardInfo",
  },
  ""
);
const borders = createElement(
  "div",
  cardDiv,
  {
    class: "borders cardInfo",
  },
  ""
);
const currencies = createElement(
  "div",
  cardDiv,
  {
    class: "currencies cardInfo",
  },
  ""
);
const img = createElement(
  "div",
  mainDiv,
  {
    class: "img",
  },
  ""
);
const flagImg = createElement("img", img, {
  src: "./img/7bbe5762c79ee0ad11c1267483b4a2d5e12868de779eaf751e8e86596e978bbb._V_SX1080_.jpg",
});

function getInfo() {
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      capital.innerHTML = `Capital - ${data[0]["capital"]}`;
      flagImg.src = data[0]["flags"]["svg"] || data[0]["flags"]["png"];
      population.innerHTML = `Population - ${data[0]["population"]}`;
      borders.innerHTML = `Borders - ${data[0]["borders"]}`;
      for (let elem in data[0]["currencies"]) {
        currencies.innerHTML = `Currency - ${data[0]["currencies"][elem].name}`;
      }
    })
    .catch((err) => {
      alert("Ivalid input");
    });
}
button.addEventListener("click", () => {
  getInfo();
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    return getInfo();
  }
});

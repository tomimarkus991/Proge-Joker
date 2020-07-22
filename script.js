const joke = document.querySelector(".joke");
const newJoke = document.querySelector(".newJoke");

getJoke = async () => {
  const response = await fetch(
    "https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Dark?blacklistFlags=nsfw,religious,political,racist,sexist"
  );
  const data = await response.json();
  if (data.type === "single") {
    let html = `<h1>Category: ${data.category}</h1><h2>${data.joke}</h2>`;
    joke.innerHTML = html;
  } else {
    let html = `<h1>Category: ${data.category}</h1><h2>${data.setup}</h2><h2>${data.delivery}</h2>`;
    joke.innerHTML = html;
  }
};

newJoke.addEventListener("click", () => {
  getJoke();
});

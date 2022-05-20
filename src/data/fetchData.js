import axios from "axios";

export async function fetchData(category = 0, difficulty = "", type = "") {
  let url = "";
  if (difficulty === "any" && type === "any") {
    url = `https://opentdb.com/api.php?amount=10&category=${category}`;
  } else if (difficulty === "any" || type === "any") {
    if (difficulty === "any") {
      url = `https://opentdb.com/api.php?amount=10&category=${category}&type=${type}`;
    } else {
      url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;
    }
  } else {
    url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`;
  }
  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.results;
    })
    .catch((error) => console.warn(error));
}

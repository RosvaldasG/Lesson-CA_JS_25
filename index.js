fetch("https://golden-whispering-show.glitch.me")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("container");
    container.className = "col-12";

    console.log(data);
    data.forEach((data) => {
      const group = document.createElement("div");
      const title = document.createElement("h1");
      const titleId = document.createElement("h5");

      group.className = "row";
      title.className = "col-6";
      titleId.className = "col-2";
      title.textContent = data.title;
      titleId.textContent = data.id;
      console.log(data.id);
      group.append(titleId, title);
      container.append(group);
    });
    // const task = document.createElement("h1");
    // task.textContent = data[0].title;
    // console.log(data[0].title);
    // container.append(task);
  });

// document.getElementById("deleteBtn").addEventListener("click", () => {
//   fetch("https://golden-whispering-show.glitch.me", {
//     method: "PUT",
//     headers: { "Content-Type": "aplication/json" },
//     body: JSON.stringify({
//       id: 3,
//       image: "abcds",
//       price: 10,
//       title: "suris",
//     })
//       .then((response) => response.json()) // or res.json()
//       .then((data) => console.log(data))
//       .catch((error) => {
//         console.error("Error:", error);
//       }),
//   });

// });

// document.getElementById("deleteBtn").addEventListener("click", () => {
//   fetch("https://golden-whispering-show.glitch.me/" + 2, {
//     method: "DELETE",
//   })
//     .then((response) => response.text()) // or res.json()
//     .then((response) => console.log(response));
// });

fetch(
  "https://api.weatherbit.io/v2.0/current?lat=54.70&lon=25.27589646596949&key=c5414bf3b8f940c4b9277110c7065f3c",
  {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

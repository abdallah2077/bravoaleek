const btn = document.querySelector("button");
const msg = document.querySelector(".msg");
const input = document.querySelector("#input");
const main = document.querySelector("#main");

btn.addEventListener("click", () => {
  if (input.value !== "") {
    main.innerHTML = `
    <video width="320" height="240" autoplay>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">
    Your browser does not support the video tag.
    </video>
    `;
  } else {
    msg.innerHTML = `
      <div class="alert alert-danger">اكتب يسطا متخمش</div>
    `;
  }
});

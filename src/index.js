function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "In a quiet moments, whispers dance, Soft as breezes, Light as chance.Dreams take flight on golden streams, Carried by the sun's bright beams.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

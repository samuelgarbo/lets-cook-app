export default function () {
  const anchor = document.querySelector("#back-to-top-anchor");
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

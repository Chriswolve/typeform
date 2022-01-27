import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";

const form = document.querySelector("#form");
console.log(form);
createWidget("Dz11z5q9", {
  container: form,
});

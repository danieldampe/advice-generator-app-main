import AdviceGenerator from "./components/AdviceGenerator.js";

// *** *** *** Variables *** *** ***
const $main = document.getElementById("main");

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(AdviceGenerator());
});

import ajax from "../helpers/ajax.js";

export default function AdviceGenerator() {
    // *** *** *** Variables *** *** ***
    const $template = document.getElementById("advice-generator-component").content,
        $clone = document.importNode($template, true),
        $title = $clone.querySelector("[data-title]"),
        $content = $clone.querySelector("[data-content]"),
        $btn = $clone.querySelector("[data-btn]");

    const ADVICE_SLIP_JSON_API = "https://api.adviceslip.com/advice";

    // *** *** *** Functions *** *** ***
    const generateAdvice = () => ajax({
        url: ADVICE_SLIP_JSON_API,
        sucess: data => {
            const {slip} = JSON.parse(data);
            $title.textContent = "Advice #" + slip.id;
            $content.textContent = "❝" + slip.advice + "❞";
        }
    }); 

    // *** *** *** Execution *** *** ***
    generateAdvice();
    $btn.addEventListener("click", generateAdvice);
    return $clone;
};

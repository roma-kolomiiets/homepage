
const engCont = "- A sponge with over 7 years of dedicated service to the Krusty Krab and 5 years of Jellyfish fishing. Posesses unadulterated enthusiasm for his work and passion in reaching his goals.";
const rusCont = "- Губка с более чем 7-летним стажем работы в Красти Краб и 5-летним стажем в  ловле медуз. Обладаю неподдельным энтузиазмом к своей работе и страстью в достижении своих целей."
const ukrCont = "- Губка з більш ніж 7-річним стажем роботи в Красті Краб і 5-річним стажем в ловлі медуз. Володію непідробним ентузіазмом до своєї роботи і жагою в досягненні своїх цілей"
const engT = "RESUME"
const rusT = "РЕЗЮМЕ"
const ukrT = "РЕЗЮМЕ"
const engName = "SpongeBob SquarePants"
const rusName = "Губка Боб Квадратные Штаны"
const ukrName = "Губка Боб Квадратні Штани";
const engJob = "Head Chef";
const rusJob = "Шеф Повар";
const ukrJob = "Шеф Кухар";

function onStart() {
    let elements = document.getElementsByClassName("lang");
    for (const el of elements) {
        el.addEventListener('click', event => {
            print(event.target, elements);
        });
    }
}

function print(el, elements) {
    for (const e of elements) {
        e.removeAttribute('disabled');
    }
    el.setAttribute('disabled', '');
    head = document.getElementById("header");
    title = document.getElementById("title");
    names = document.getElementById("names");
    jobs = document.getElementById("jobs");
    console.log(el);
    switch (el.textContent) {
        case "ENGLISH":
            head.textContent = engCont;
            title.textContent = engT;
            names.textContent = engName ;
            jobs.textContent = engJob ;
            break;
        case "РУССКИЙ":
            head.textContent = rusCont;
            title.textContent = rusT;
            names.textContent = rusName ;
            jobs.textContent = rusJob ;
            break;
        case "УКРАЇНСЬКА":
            head.textContent = ukrCont;
            title.textContent = ukrT;
            names.textContent = ukrName ;
            jobs.textContent = ukrJob ;
            break;
        default:
            break;
    }
}
onStart()

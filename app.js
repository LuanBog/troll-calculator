const screenAnswer = document.querySelector('#answer');
const answer = document.querySelector("#answer");

const mababaitNaSalita = [
    'bobo amp',
    'tanga??',
    'di ka maalam mag math',
    'simpleng bagay di mo magawa',
    'kahit calculator nahihirapan sayo',
    'ilang beses mo pa uulitin?',
    'ang dali dali mali pa rin',
    'grabe ka, mas madali pa matulog',
    '1+1 lang yan teh',
    'mas mabilis pa kinder sa’yo',
    'sayang load ko sa’yo',
    'pati calculator napagod',
    'hays, wag ka na mag try',
    'ikaw na lang mag compute',
    'ikaw na mag commute di ko na kaya',
    'miss ko na siya'
];

let screen = '';

const calculate = () => {
    const random = Math.floor(Math.random() * mababaitNaSalita.length);

    answer.classList.remove('nowrap');

    screenAnswer.innerHTML = mababaitNaSalita[random];
}

const navigationClick = () => {
    screen = 'bakit ka naalis??';
    screenAnswer.innerHTML = screen;
} 

const buttonClick = (text) => {
    if(text === "equals") {
        calculate();
        return;
    } else if(text === "ac") {
        screen = '0';
        screenAnswer.innerHTML = screen;
        return;
    }

    answer.classList.add('nowrap');

    if(screen === '0') 
        screen = text;
    else
        screen = screen + text;

    screenAnswer.innerHTML = screen;
}

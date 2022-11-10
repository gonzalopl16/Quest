import { questions } from './data/questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'


/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui 
 */
const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScore(quiz.score);
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showOption(quiz.getQuestionIndex().option, (currentOption) => {
            console.log(currentOption)
            let condition = quiz.getQuestionIndex().correctAnwer(currentOption);
            if (condition) {
                showImg(quiz, ui, 'enciende');
            } else {
                showImg(quiz, ui, 'no enciende');
            }
            quiz.guess(currentOption);
            
        });
        ui.showProgress(quiz.questionIndex + 1, questions.length)
    }
}

function showImg(quiz, ui, condition) {
    const quizImgHTML = `
        <img class="container" id="image" src="./img/${condition}.png">`;
    const element = document.getElementById('quiz');
    element.insertAdjacentHTML("beforeend",
        quizImgHTML);
    let buttons = document.querySelectorAll('.button');
    buttons = [...buttons];
    buttons.forEach(e => {
        e.remove();
    })
    setTimeout(() => {
        renderPage(quiz, ui);
        document.getElementById('image').remove();
    }, 3000);
}

function main() {
    const quiz = new Quiz(questions);
    const ui = new UI();
    renderPage(quiz, ui);
}

main()
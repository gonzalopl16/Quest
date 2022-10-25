export class UI {
    constructor(){

    }

    /**
     * 
     * @param {string} text 
     */
    showQuestion(text){
        const questionTittle = document.getElementById('question');
        questionTittle.innerHTML = text;
    }

    /**
     * 
     * @param {string[]} option 
     */
    showOption(option, callback){
        const optionContainer = document.getElementById('option');
        optionContainer.innerHTML = '';
        for(let i =0;i < option.length; i++){
            const button = document.createElement('button');
            button.innerText = option[i];
            button.className = 'button';
            button.addEventListener('click',() =>{
                callback(option[i]);
            })
            optionContainer.append(button);
        }
    }

    /**
     * 
     * @param {number} score 
     */
    showScore(score){
        const quizEndHTML = `
        <h1>Resultado</h1>
        <h2>Tu es Score: ${score}</h2>`;
        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHTML;
    }

    /**
     * 
     * @param {number} currentIndex 
     * @param {number} total 
     */
    showProgress(currentIndex, total){
        const element = document.getElementById('progress');
        element.innerHTML = `Pregunta ${currentIndex} de ${total}`
    }
}
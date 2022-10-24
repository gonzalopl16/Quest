export class Question {

    /**
     * 
     * @param {string} text
     * @param {string[]}option
     * @param {string}answer
     * 
     */

    constructor(text, option, answer) {
        this.text = text;
        this.option = option;
        this.answer = answer;
    }
    
    /**
     * 
     * @param {string} answer 
     * @returns {boolean}
     */
    correctAnwer(answer) {
        return answer === this.answer;
    }
}

new Question()
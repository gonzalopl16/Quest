// @ts-check
import { questions } from "../data/questions.js";
import { Question } from "./question.js";

export class Quiz {

    questionIndex = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} questions 
     */

    constructor(questions){
        this.questions = questions;
    }

    /**
     * 
     * @returns {Question}
     */
    getQuestionIndex(){
        return this.questions[this.questionIndex]
    }

    isEnded(){
        return this.questions.length === this.questionIndex
    }

    /**
     * 
     * @param {string} answer 
     */
    guess(answer){

        if(this.getQuestionIndex().correctAnwer(answer)){
            this.score++;
        }

        this.questionIndex++;
    }

    /**
     * 
     * @param {string} answer 
     * @param {Quiz} quest
     * @returns {boolean}
     */
    compareAnswer(answer, quest){
            return quest.getQuestionIndex().correctAnwer(answer);
    }

}


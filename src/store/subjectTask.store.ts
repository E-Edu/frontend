import {observable, action} from "mobx";
import Question from "../models/task/question";
import Task from '../models/task/task';

class SubjectTaskStore {
    @observable title: string;
    @observable lecture: string;
    @observable subject: string;
    @observable questions: Question[];
    @observable currentQuestion;
    @observable maxQuestion;

    @action loadTask(task: Task) {
        this.title = task.title;
        this.lecture = task.lecture;
        this.subject = task.subject;
        this.questions = task.questions;
        this.currentQuestion = 0;
        this.maxQuestion = task.questions.length;
    }

    @action nextQuestion() {
        this.currentQuestion += 1;
    }

    @action toggleAnswerSelection(answerId: number) {
        this.questions[this.currentQuestion].answers[answerId].selected = !this.questions[this.currentQuestion].answers[answerId].selected;
    }
}

export default SubjectTaskStore;
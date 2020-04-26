import Answer from './answer';

export default interface Question {
    title: string;
    description: string;
    answers: Answer[];
}

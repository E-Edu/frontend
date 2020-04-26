import Question from './question';
import { DifficultyEnum } from '../difficulty.enum';

export default interface Task {
    title: string;
    subject: string;
    selectedDifficulty: DifficultyEnum;
    lecture: string;
    description: string;
    questions: Question[];
}

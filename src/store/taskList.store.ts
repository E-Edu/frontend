import {computed, observable, action} from "mobx";
import {DifficultyEnum} from "../models/difficulty.enum";

class TaskListStore {
    @observable search = '';
    @observable tasks = [];

    @action setSearch(value: string) {
        this.search = value;
    }

    @action setTasks(tasks: { id: string, description: string, difficulty: DifficultyEnum }[]) {
        this.tasks = tasks;
    }

    @action addTasks(tasks: { id: string, description: string, difficulty: DifficultyEnum }[]) {
        tasks.forEach((item) => {
            this.tasks.push(item);
        });
    }
}

export default TaskListStore;
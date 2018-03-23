import { ITask } from "./ITask";

export interface ITaskList {
    id: string;
    name: string;
    position: number;
    tasks?: ITask[];
}
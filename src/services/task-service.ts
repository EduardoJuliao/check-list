import { ITask } from './../models/task/ITask';
import { Injectable } from '@angular/core';
import { ITaskList } from '../models/task/ITaskList';

@Injectable()
export class TaskService {

    constructor() { }

    public getTaskList(): ITaskList[]{
        return [{
            id: "teste",
            name: "Lista 1",
            position: 0
        }];
    }

    public getTasks(listId: string): ITask[]{
        return [];
    }
}
import { ITaskList } from './../models/task/ITaskList';
import { MessageService, IMessageAsk } from './../services/message-service';
import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/task-service';
import { ITask } from '../models/task/ITask';
 
@Component({
    selector: 'app-tasklist',
    templateUrl: './tasklist-component.html',
    styleUrls: [
        "./tasklist-component.css"
    ]
})
export class TaskListComponent implements OnInit {

    @Input("task-id") id: string;
    taskName: string = '';
    tasks: ITask[];

    constructor(private messageService: MessageService,
    private taskService: TaskService) {
        this.tasks = taskService.getTasks(this.id);
    }

    ngOnInit(): void {
    }

    public askRemove(taskListId: string, taskId: string): void {
        this.messageService.ask({
            title: "Remover?",
            message: "Confirma a remoção desta tarefa?",
            onOk: () => {
                this.remove( taskId);
            }
        })
    }

    private remove(taskId: string): void {

    } 

    public remainingTasksCount(taskListId: string): number { 
        if (this.tasks == undefined) return 0;
        return this.tasks.filter(x => x.isCompleted).length;
    }

    public addTask(): void {
        if(this.taskName == undefined || this.taskName.trim() == ""){
            this.messageService.warning("feqfeqw");
            return;
        }
        this.tasks.push({
            id: (Math.floor(Math.random() * 10000)).toString(),
            name: this.taskName.trim(),
            isCompleted: false
        });

        this.taskName = "";
    }
}

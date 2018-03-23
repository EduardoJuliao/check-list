import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Injectable()
export class MessageService {

    constructor(public iziToast: Ng2IzitoastService,
        private translate: TranslateService) {
        
    }

    public success(message: string): void {
        this.translate.get('MESSAGE.SUCCESS').subscribe((res: string) => {
            this.iziToast.success({
                title: res,
                message: message
            });
        });
    }

    public warning(message: string): void {
        this.translate.get('MESSAGE.WARNING').subscribe((res: string) => {
            this.iziToast.warning({
                title: res,
                message: message
            });
        });
    }

    public error(message: string): void {
        this.translate.get('MESSAGE.ERROR').subscribe((res: string) => {
            this.iziToast.error({
                title: res,
                message: message
            });
        });
    }

    public info(message: string): void {
        this.translate.get('MESSAGE.INFO').subscribe((res: string) => {
            this.iziToast.info({
                title: res,
                message: message
            });
        });
    }

    public ask(options: IMessageAsk): void {

        this.translate.get('MESSAGE.WARNING').subscribe((res: string) => {
            let yes = this.translate.instant("MESSAGE.YES");
            let no = this.translate.instant("MESSAGE.NO");
            this.iziToast.question({
                title: options.title,
                message: options.message,
                timeout: 0,
                buttons: [
                    [`<button><b>${yes}</b></button>`, function (instance, toast) {
                        if (options.onOk != undefined) {
                            options.onOk();
                        }
                        instance.hide(toast,{ transitionOut: 'fadeOut' }, 'button');
                    }],
                    [`<button><b>${no}</b></button>`, function (instance, toast) {
                        if (options.onCancel != undefined) {
                            options.onCancel();
                        }
                        instance.hide(toast, { transitionOut: 'fadeOut' }, 'button');
                    }]
                ]
            });
        });


    }
}

export interface IMessageAsk {
    onOk?: () => void;
    onCancel?: () => void;
    title: string;
    message: string;
}

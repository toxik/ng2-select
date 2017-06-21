import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SelectEmitterService {
    @Output() notification: EventEmitter<any> = new EventEmitter();
    sendNotification(instance: any) {
        this.notification.emit(instance);
    }
}
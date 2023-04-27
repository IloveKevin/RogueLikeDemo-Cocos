export enum EventType {
    MouseMove,
}
export default class EventManager {
    public static instance: EventManager;
    public static GetInstance(): EventManager {
        if (null == this.instance) this.instance = new EventManager();
        return this.instance
    }

    private eventMap: Map<EventType, Function[]> = new Map<EventType, Function[]>();

    public On(eventType: EventType, callFunction: Function) {
        let funs: Function[];
        funs = this.eventMap.get(eventType);
        if (!funs) funs = [];
        funs.push(callFunction);
        this.eventMap.set(eventType, funs);
    }

    public Off(eventType: EventType, callFunction: Function) {
        let funs: Function[];
        funs = this.eventMap.get(eventType);
        if (!funs) return;
        for (let i = 0; i < funs.length; i++) {
            if (funs[i] == callFunction) funs.splice(i, 1);
        }
        this.eventMap.set(eventType, funs);
    }

    public Send(eventType: EventType, date: EventDateBase) {
        let funs: Function[];
        funs = this.eventMap.get(eventType);
        if (!funs) return;
        for (let i = 0; i < funs.length; i++) {
            funs[i](date);
        }
    }

    public Clear() {
        this.eventMap = new Map<EventType, Function[]>();
    }
}

export class EventDateBase {
    public sender: object
    constructor(sender: object) {
        this.sender = sender;
    }
}

import MouseDate from "./EventDate/MouseDate";
import EventManager, { EventType } from "./Manager/EventManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MouseInput extends cc.Component {
    private pointerPos: cc.Vec2;
    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.OnTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.OnTouchEnd, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.MouseMove, this);
    }

    public OnTouchStart(e: cc.Event.EventTouch) {
        EventManager.GetInstance().Send(EventType.MouseDown);
    }

    public OnTouchEnd(e: cc.Event.EventTouch) {
        EventManager.GetInstance().Send(EventType.MouseUp);
    }

    public MouseMove(e: cc.Event.EventMouse) {
        this.pointerPos = e.getLocation();
    }

    protected update(dt: number): void {
        if (this.pointerPos) EventManager.GetInstance().Send(EventType.MouseMove, new MouseDate(this, this.pointerPos));
    }

    protected onDestroy(): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this.OnTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.OnTouchEnd, this);
        this.node.off(cc.Node.EventType.MOUSE_MOVE, this.MouseMove, this);
    }
}

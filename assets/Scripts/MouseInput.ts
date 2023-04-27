import MouseDate from "./EventDate/MouseDate";
import EventManager, { EventType } from "./Manager/EventManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MouseInput extends cc.Component {
    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_START, this.OnTouchStart, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.MouseMove, this);
    }

    public OnTouchStart(e: cc.Event.EventTouch) {
        EventManager.GetInstance().Send(EventType.MouseDown);
    }

    public MouseMove(e: cc.Event.EventMouse) {
        EventManager.GetInstance().Send(EventType.MouseMove, new MouseDate(this, e.getLocation()));
    }

    protected onDestroy(): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this.OnTouchStart, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.MouseMove, this);
    }
}

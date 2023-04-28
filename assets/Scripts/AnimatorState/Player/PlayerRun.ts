import Player from "../../Player";
import PlayerMove from "./PlayerMove";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerRun extends PlayerMove {
    public OnEnter(): void {
        console.log("角色进入奔跑状态");
    }
    public OnExit(): void {
        console.log("角色退出奔跑状态");
    }
    protected GetSpeed(): number {
        return (<Player>this._role).GetRunSpeed();
    }
    public OnKeyDown(event: cc.Event.EventKeyboard): void {
        this.inputKey[event.keyCode] = 1;
    }
    public OnKeyUp(event: cc.Event.EventKeyboard): void {
        this.inputKey[event.keyCode] = 0;
        if (cc.macro.KEY.shift == event.keyCode) {
            this.animator.ChangeState("PlayerMove");
            (<PlayerMove>this.animator.GetState()).inputKey = this.inputKey;
            this.animator.OnkeyUp(event);
        }
    }
}

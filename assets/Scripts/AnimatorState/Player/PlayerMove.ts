import StateBase from "../../Base/StateBase";
import PlayerIdle from "./PlayerIdel";
import PlayerRun from "./PlayerRun";

export default class PlayerMove extends StateBase {
    public inputKey: number[] = [];
    private inputDir: cc.Vec2 = cc.v2(0, 0);
    public OnEnter(): void {
        console.log("角色进入行走状态");
    }
    public OnExit(): void {
        console.log("角色退出行走状态");
    }
    public OnKeyDown(event: cc.Event.EventKeyboard): void {
        this.inputKey[event.keyCode] = 1;
        if (cc.macro.KEY.shift == event.keyCode) {
            this.animator.ChangeState("PlayerRun");
            (<PlayerRun>this.animator.GetState()).inputKey = this.inputKey;
            this.animator.OnkeyDown(event);
        }
    }
    public OnKeyUp(event: cc.Event.EventKeyboard): void {
        this.inputKey[event.keyCode] = 0;
    }

    protected GetSpeed(): number {
        return this._role.GetSpeed();
    }

    public OnUpdate(dt: number): void {
        if (this.inputKey[cc.macro.KEY.w]) this.inputDir.y = 1;
        else if (this.inputKey[cc.macro.KEY.s]) this.inputDir.y = -1;
        else { this.inputDir.y = 0; }
        if (this.inputKey[cc.macro.KEY.a]) this.inputDir.x = -1;
        else if (this.inputKey[cc.macro.KEY.d]) this.inputDir.x = 1;
        else { this.inputDir.x = 0; }
        let moveDir = this.inputDir.normalize();
        let speed = this.GetSpeed();
        let rb = this._role.GetRb();
        rb.linearVelocity = moveDir.mul(speed);
        if (rb.linearVelocity.equals(cc.Vec2.ZERO)) {
            this.animator.ChangeState("PlayerIdle");
        }
    }
}

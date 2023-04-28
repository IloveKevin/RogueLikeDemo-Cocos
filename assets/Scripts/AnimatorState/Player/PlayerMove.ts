import StateBase from "../../Base/StateBase";
import PlayerIdle from "./PlayerIdel";

export default class PlayerMove extends StateBase {
    private inputDir: cc.Vec2 = cc.v2(0, 0);
    public OnEnter(): void {
        console.log("角色进入行走状态");
    }
    public OnExit(): void {
        console.log("角色退出行走状态");
    }
    public OnKeyDown(event: cc.Event.EventKeyboard): void {
        if (cc.macro.KEY.a == event.keyCode) this.inputDir.x = -1;
        if (cc.macro.KEY.d == event.keyCode) this.inputDir.x = +1;
        if (cc.macro.KEY.w == event.keyCode) this.inputDir.y = +1;
        if (cc.macro.KEY.s == event.keyCode) this.inputDir.y = -1;
    }
    public OnKeyUp(event: cc.Event.EventKeyboard): void {
        if (cc.macro.KEY.a == event.keyCode) this.inputDir.x = -1 ? this.inputDir.x = 0 : this.inputDir.x = this.inputDir.x;
        if (cc.macro.KEY.d == event.keyCode) this.inputDir.x = +1 ? this.inputDir.x = 0 : this.inputDir.x = this.inputDir.x;
        if (cc.macro.KEY.w == event.keyCode) this.inputDir.y = +1 ? this.inputDir.y = 0 : this.inputDir.x = this.inputDir.x;
        if (cc.macro.KEY.s == event.keyCode) this.inputDir.y = -1 ? this.inputDir.y = 0 : this.inputDir.x = this.inputDir.x;
    }
    public OnUpdate(dt: number): void {
        let moveDir = this.inputDir.normalize();
        let speed = this._role.GetSpeed();
        let rb = this._role.GetRb();
        rb.linearVelocity = moveDir.mul(speed);
        console.log(rb.linearVelocity.x, rb.linearVelocity.y);

        // this._role.node.x += moveDir.x * dt * speed;
        // this._role.node.y += moveDir.y * dt * speed;
        if (rb.linearVelocity.equals(cc.Vec2.ZERO)) {
            this.animator.ChangeState(PlayerIdle.name);
        }
    }
}

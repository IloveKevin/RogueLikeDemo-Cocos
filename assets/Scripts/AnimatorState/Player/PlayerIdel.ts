import StateBase from "../../Base/StateBase";
export default class PlayerIdle extends StateBase {
    //start------------虚方法-----------
    /**进入该状态时被调用 */
    OnEnter() {
        console.log("进入角色站立状态");
    }

    /**该状态每帧都会调用的方法 */
    OnUpdate(dt: number) { }

    /**该状态监听的键盘输入事件 */
    OnKeyDown(event: cc.Event.EventKeyboard) {
        if (cc.macro.KEY.a == event.keyCode ||
            cc.macro.KEY.d == event.keyCode ||
            cc.macro.KEY.w == event.keyCode ||
            cc.macro.KEY.s == event.keyCode) {
            this.animator.ChangeState("PlayerMove");
            this.animator.OnkeyDown(event);
        }
    }

    /**该状态监听的键盘弹起事件 */
    OnKeyUp(event: cc.Event.EventKeyboard) { }

    /**离开该状态时调用 */
    OnExit() {
        console.log("退出角色站立状态");
    }
    //end--------------虚方法------------
}

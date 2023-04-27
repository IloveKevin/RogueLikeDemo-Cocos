import Animator from "../Animator";
import RoleBase from "./RoleBase";

export default class StateBase {
    protected _role: RoleBase = null;
    protected animator: Animator = null;
    constructor(role: RoleBase, animator: Animator) {
        this._role = role;
        this.animator = animator;
    }
    //start------------虚方法-----------
    /**进入该状态时被调用 */
    OnEnter() { }

    /**该状态每帧都会调用的方法 */
    OnUpdate(dt: number) { }

    /**该状态监听的键盘输入事件 */
    OnKeyDown(event: cc.Event.EventKeyboard) { }

    /**该状态监听的键盘弹起事件 */
    OnKeyUp(event: cc.Event.EventKeyboard) { }

    /**离开该状态时调用 */
    OnExit() { }
    //end--------------虚方法------------
}

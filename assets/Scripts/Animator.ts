import StateBase from "./Base/StateBase";

export default class Animator {
    private stateMap: Map<String, StateBase> = new Map<String, StateBase>();
    private state: StateBase = null;
    public AddState(name: string, state: StateBase) {
        if (!this.stateMap.has(name)) this.stateMap.set(name, state);
    }
    public DeleteState(name: string) {
        this.stateMap.delete(name);
    }
    public ClearState() {
        this.stateMap.clear();
    }
    public OnkeyDown(e: cc.Event.EventKeyboard) {
        if (null == this.state) return;
        this.state.OnKeyDown(e);
    }
    public OnkeyUp(e: cc.Event.EventKeyboard) {
        if (null == this.state) return;
        this.state.OnKeyUp(e);
    }
    public ChangeState(name: string) {
        if (!this.stateMap.has(name)) return;
        if (null != this.state) this.state.OnExit();
        let state = this.stateMap.get(name);
        state.OnEnter();
        this.state = state;
    }
    public OnUpdate(dt: number) {
        if (null == this.state) return;
        this.state.OnUpdate(dt);
    }
}

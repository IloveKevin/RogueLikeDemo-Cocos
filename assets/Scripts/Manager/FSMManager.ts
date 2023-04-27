import Animator from "../Animator";
import MoudleBase from "../Base/MoudleBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FSMManager extends MoudleBase {
    private animatorMap: Map<string, Animator> = new Map<string, Animator>();
    public GetAnimator(name: string) {
        let animator: Animator = null;
        if (!this.animatorMap.has(name)) {
            animator = new Animator();
            this.animatorMap.set(name, animator);
        }
        else {
            animator = this.animatorMap.get(name);
        }
        return animator;
    }
    public DeleteAnimator(name: string) {
        this.animatorMap.delete(name);
    }
    public ClearAnimator() {
        this.animatorMap.clear();
    }
    public OnUpdate(dt: number): void {
        this.animatorMap.forEach((value) => {
            value.OnUpdate(dt);
        })
    }
}

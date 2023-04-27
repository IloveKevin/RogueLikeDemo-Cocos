import Animator from "../Animator";
import Game from "../Game";
import RogueLikeObjectBase from "./RogueLikeObjectBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoleBase extends RogueLikeObjectBase {
    protected speed: number;
    protected moveDir: number;
    protected animator: Animator;
    public Init(game: Game) {
        super.Init(game);
    }
    public GetSpeed(): number {
        return this.speed;
    }
    public GetAnimator(): Animator {
        return this.animator;
    }
}

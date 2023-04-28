import Animator from "../Animator";
import Game from "../Game";
import RogueLikeObjectBase from "./RogueLikeObjectBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoleBase extends RogueLikeObjectBase {
    @property(cc.JsonAsset)
    roleAsset: cc.JsonAsset = null;
    protected speed: number;
    protected HP: number;
    protected moveDir: number;
    protected animator: Animator;
    public RoleBaseInit(game: Game) {
        super.Init(game);
        this.speed = this.roleAsset.json.speed;
        this.HP = this.roleAsset.json.HP;
    }
    public GetSpeed(): number {
        return this.speed;
    }
    public GetAnimator(): Animator {
        return this.animator;
    }
    public Death() {
        this.node.destroy();
    }
    protected update(dt: number): void {
        if (this.HP <= 0) this.Death();
    }
}

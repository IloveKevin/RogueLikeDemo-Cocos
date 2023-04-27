import Game from "../Game";
import RogueLikeObjectBase from "./RogueLikeObjectBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletBase extends RogueLikeObjectBase {
    protected speed: number;
    protected moveDir: cc.Vec2;
    protected baseHarm: number;
    protected surviveTime: number;
    protected surviveMaxTime: number;

    public Init(game: Game): void {
        super.Init(game);
    }

    protected Move(dt: number) {
        this.node.x += this.moveDir.x * this.speed * dt;
        this.node.y += this.moveDir.y * this.speed * dt;
    }

    protected update(dt: number): void {
        this.surviveTime += dt;
        if (this.surviveTime >= this.surviveMaxTime) this.node.destroy();
        this.Move(dt);
    }
}

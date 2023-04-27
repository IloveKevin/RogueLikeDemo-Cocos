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

    public BulletBaseInit(game: Game, speed: number, moveDir: cc.Vec2, baseHarm: number, surviveMaxTime: number): void {
        super.Init(game);
        this.speed = speed;
        this.moveDir = moveDir;
        this.baseHarm = baseHarm;
        this.surviveTime = 0;
        this.surviveMaxTime = surviveMaxTime;
    }

    protected Move(dt: number) {
        this.node.x += this.moveDir.x * this.speed * dt;
        this.node.y += this.moveDir.y * this.speed * dt;
    }

    protected Veer() {
        let rotation = cc.misc.radiansToDegrees(this.moveDir.angle(cc.Vec2.UP));
        if (this.moveDir.x < 0) {
            rotation = -rotation;
        }
        this.node.angle = -rotation;
    }

    protected update(dt: number): void {
        this.surviveTime += dt;
        if (this.surviveTime >= this.surviveMaxTime) this.node.destroy();
        this.Move(dt);
        this.Veer();
    }
}

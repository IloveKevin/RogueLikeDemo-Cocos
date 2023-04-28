import Game from "../Game";
import RigidBodyBase from "./RigidBodyBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletBase extends RigidBodyBase {
    @property(cc.JsonAsset)
    bulletAsset: cc.JsonAsset = null;
    protected speed: number;
    protected moveDir: cc.Vec2;
    protected baseHarm: number;
    protected surviveTime: number;
    protected surviveMaxTime: number;

    public BulletBaseInit(game: Game, moveDir: cc.Vec2): void {
        super.RigidBodyBaseInit(game);
        this.speed = this.bulletAsset.json.speed;
        this.moveDir = moveDir;
        this.baseHarm = this.bulletAsset.json.baseHarm;
        this.surviveTime = 0;
        this.surviveMaxTime = this.bulletAsset.json.surviveMaxTime;
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

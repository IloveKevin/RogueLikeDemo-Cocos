const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletBase extends cc.Component {
    protected speed: number;
    protected moveDir: cc.Vec2;
    protected baseHarm: number;
    protected surviveTime: number;
    protected surviveMaxTime: number;

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

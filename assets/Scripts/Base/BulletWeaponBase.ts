import DefaultBullet from "../Bullet/DefaultBullet";
import Util from "../Util/Util";
import WeaponBase from "./WeaponBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletWeaponBase extends WeaponBase {
    @property(cc.Prefab)
    bulltePrefab: cc.Prefab = null;

    protected Fire(): void {
        this.fireCd = this.fireMaxCd;
        let radian = cc.misc.degreesToRadians(this.node.angle);
        let moveDir = cc.Vec2.UP.rotate(radian);
        let newBullet = cc.instantiate(this.bulltePrefab);
        newBullet.setParent(this.game.node);
        newBullet.setPosition(Util.GetWorldPosToNodePos(newBullet, Util.GetNodeWorldPos(this.gunpointNode)));
        let bullet = newBullet.getComponent(DefaultBullet);
        bullet.BulletBaseInit(this.game, moveDir);
    }
}

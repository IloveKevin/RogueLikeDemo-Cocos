import WeaponBase from "../Base/WeaponBase";
import DefaultBullet from "../Bullet/DefaultBullet";
import Util from "../Util/Util";
import WeaponHolder from "../WeaponHolder";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DefaultWeapon extends WeaponBase {
    public DefaultWeaponInit(weaponHolder: WeaponHolder) {
        super.WeaponBaseInit(weaponHolder, 1);
    }

    protected Fire(): void {
        super.Fire();
        let radian = cc.misc.degreesToRadians(this.node.angle);
        let moveDir = cc.Vec2.UP.rotate(radian);
        let newBullet = cc.instantiate(this.bulltePrefab);
        newBullet.setParent(this.game.node);
        newBullet.setPosition(Util.GetWorldPosToNodePos(newBullet, Util.GetNodeWorldPos(this.gunpointNode)));
        let bullet = newBullet.getComponent(DefaultBullet);
        bullet.DefaultBulletInit(this.game, moveDir);
    }
}

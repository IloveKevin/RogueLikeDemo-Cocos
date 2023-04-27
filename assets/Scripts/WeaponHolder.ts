import BulletBase from "./BulletBase";
import WeaponBase from "./WeaponBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WeaponHolder extends cc.Component {
    public weapon: WeaponBase;
    public bullet: BulletBase;

    public TryFire() {
        this.weapon.TryFire();
    }
}

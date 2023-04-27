import BulletBase from "./Base/BulletBase";
import WeaponBase from "./Base/WeaponBase";
import Player from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WeaponHolder extends cc.Component {
    public player: Player;
    public weapon: WeaponBase;
    public bullet: BulletBase;

    public TryFire() {
        this.weapon.TryFire();
    }
}

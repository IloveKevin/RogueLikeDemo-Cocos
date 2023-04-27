import BulletBase from "./Base/BulletBase";
import RogueLikeObjectBase from "./Base/RogueLikeObjectBase";
import WeaponBase from "./Base/WeaponBase";
import Game from "./Game";
import Player from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WeaponHolder extends RogueLikeObjectBase {
    public player: Player;
    public weapon: WeaponBase;
    public bullet: BulletBase;

    public WeaponHolderInit(player: Player) {
        this.player = player;
        super.Init(this.game);
    }

    public ChangeWeapon(weapon: WeaponBase) {
        this.weapon = weapon;
        weapon.node.setParent(this.node);
        weapon.node.setPosition(0, 0);
    }

    public TryFire() {
        if (!this.weapon) return;
        this.weapon.TryFire();
    }
}

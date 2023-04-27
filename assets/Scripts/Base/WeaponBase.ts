import Game from "../Game";
import WeaponHolder from "../WeaponHolder";
import RogueLikeObjectBase from "./RogueLikeObjectBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WeaponBase extends RogueLikeObjectBase {
    protected baseHarm: number;
    protected fireCd: number;
    protected fireMaxCd: number;
    protected weaponHolder: WeaponHolder;

    public WeaponBaseInit(weaponHolder: WeaponHolder, fireMaxCd: number) {
        this.weaponHolder = weaponHolder;
        super.Init(weaponHolder.game);
        this.fireCd = 0;
        this.fireMaxCd = fireMaxCd;
    }

    public TryFire() {
        if (this.fireCd <= 0) {
            this.Fire();
        } else {
            console.log("武器冷却中");
        }
    }

    protected Fire() {
        this.fireCd = this.fireMaxCd;
        console.log("Fire!!!");
    }

    protected update(dt: number): void {
        this.fireCd -= dt;
    }
}

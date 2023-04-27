import Game from "../Game";
import WeaponHolder from "../WeaponHolder";
import RogueLikeObjectBase from "./RogueLikeObjectBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WeaponBase extends RogueLikeObjectBase {
    @property(cc.Prefab)
    bulltePrefab: cc.Prefab = null;
    @property(cc.Node)
    gunpointNode: cc.Node = null;
    protected baseHarm: number;
    protected fireCd: number;
    protected fireMaxCd: number;
    protected weaponHolder: WeaponHolder;

    public WeaponBaseInit(weaponHolder: WeaponHolder, fireMaxCd: number) {
        super.Init(weaponHolder.game);
        this.weaponHolder = weaponHolder;
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

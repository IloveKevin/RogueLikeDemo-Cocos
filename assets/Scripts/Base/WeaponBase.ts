import DefaultBullet from "../Bullet/DefaultBullet";
import Util from "../Util/Util";
import WeaponHolder from "../WeaponHolder";
import RogueLikeObjectBase from "./RogueLikeObjectBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WeaponBase extends RogueLikeObjectBase {
    @property(cc.Node)
    gunpointNode: cc.Node = null;
    @property(cc.JsonAsset)
    weaponAsset: cc.JsonAsset = null;
    protected baseHarm: number;
    protected fireCd: number;
    protected fireMaxCd: number;
    protected weaponHolder: WeaponHolder;

    public WeaponBaseInit(weaponHolder: WeaponHolder) {
        super.Init(weaponHolder.game);
        this.weaponHolder = weaponHolder;
        this.fireCd = 0;
        this.baseHarm = this.weaponAsset.json.baseHarm;
        this.fireMaxCd = this.weaponAsset.json.fireMaxCd;
    }

    public TryFire() {
        if (this.fireCd <= 0) {
            this.Fire();
        } else {
            console.log("武器冷却中");
        }
    }

    protected Fire() {
        console.log("Fire!!!");
    }

    protected update(dt: number): void {
        this.fireCd -= dt;
    }
}

import WeaponBase from "../Base/WeaponBase";
import WeaponHolder from "../WeaponHolder";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DefaultWeapon extends WeaponBase {
    public DefaultWeaponInit(weaponHolder: WeaponHolder) {
        super.WeaponBaseInit(weaponHolder);
        this.fireMaxCd = 1;
    }
}

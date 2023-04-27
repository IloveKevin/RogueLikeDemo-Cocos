const { ccclass, property } = cc._decorator;

@ccclass
export default class WeaponBase extends cc.Component {
    protected baseHarm: number;
    protected fireCd: number;
    protected fireMaxCd: number;

    public TryFire(): boolean {
        if (this.fireCd <= 0) {
            this.Fire();
            return true;
        }
        else {
            return false;
        }
    }

    protected Fire() {
        this.fireCd = this.fireMaxCd;
    }

    protected update(dt: number): void {
        this.fireCd -= dt;
    }
}

import WeaponHolder from "./WeaponHolder";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    public weaponHolder: WeaponHolder;

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}

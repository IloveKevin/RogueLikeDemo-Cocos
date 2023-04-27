import BulletBase from "../Base/BulletBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DefaultBullet extends BulletBase {

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

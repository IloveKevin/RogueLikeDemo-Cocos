import EnemyBase from "./Base/EnemyBase";
import EnemyDetector from "./EnemyDetector";
import WeaponHolder from "./WeaponHolder";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {
    public weaponHolder: WeaponHolder;
    public enemyDetector: EnemyDetector;
    public target: EnemyBase;
}

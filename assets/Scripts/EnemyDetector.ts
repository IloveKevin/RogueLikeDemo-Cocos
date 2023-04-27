import EnemyBase from "./Base/EnemyBase";
import RogueLikeObjectBase from "./Base/RogueLikeObjectBase";
import Game from "./Game";
import EnemyManager from "./Manager/EnemyManager";
import Player from "./Player";
import Util from "./Util/Util";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyDetector extends RogueLikeObjectBase {
    public player: Player;
    private distance: number = 300;
    public EnemyDetectorInit(player: Player) {
        this.player = player;
        super.Init(player.game);
    }
    protected update(dt: number): void {
        if (!this.game) return;
        let target: EnemyBase = null;
        let targetDistance: number = this.distance;
        let distance: number;
        (<EnemyManager>(this.game.moudleManager.GetMoudle(EnemyManager.name))).GetAllEnemy().forEach((value) => {
            distance = (Util.GetNodeWorldPos(this.player.node).sub(Util.GetNodeWorldPos(value.node))).mag();
            if (distance <= targetDistance) {
                target = value;
                targetDistance = distance;
            }
        })
        this.player.target = target;
    }
}

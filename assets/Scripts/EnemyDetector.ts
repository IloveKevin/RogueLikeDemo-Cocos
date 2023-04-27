import EnemyBase from "./Base/EnemyBase";
import Game from "./Game";
import EnemyManager from "./Manager/EnemyManager";
import Player from "./Player";
import Util from "./Util/Util";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyDetector extends cc.Component {
    public game: Game;
    public player: Player;
    private distance: number = 300;
    protected update(dt: number): void {
        if (!this.game) return;
        let target: EnemyBase = null;
        let distance: number = this.distance;
        (<EnemyManager>(this.game.moudleManager.GetMoudle(EnemyManager.name))).GetAllEnemy().forEach((value) => {
            if ((Util.GetNodeWorldPos(this.player.node).sub(Util.GetNodeWorldPos(value.node))).mag() <= distance) {
                target = value;
                distance = (Util.GetNodeWorldPos(this.player.node).sub(Util.GetNodeWorldPos(value.node))).mag();
            }
        })
        this.player.target = target;
    }
}

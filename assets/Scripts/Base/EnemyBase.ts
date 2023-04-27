import Game from "../Game";
import EnemyManager from "../Manager/EnemyManager";
import RoleBase from "./RoleBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyBase extends RoleBase {
    public EnemyInit(game: Game) {
        super.Init(game);
        (<EnemyManager>this.game.moudleManager.GetMoudle(EnemyManager.name)).AddEnemy(this);
    }
}

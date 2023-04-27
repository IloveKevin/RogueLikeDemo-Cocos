import EnemyBase from "../Base/EnemyBase";
import MoudleBase from "../Base/MoudleBase";

export default class EnemyManager extends MoudleBase {
    private enemyList: EnemyBase[];
    public GetAllEnemy(): EnemyBase[] {
        return this.enemyList;
    }
}

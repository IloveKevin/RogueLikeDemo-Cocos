import EnemyBase from "../Base/EnemyBase";
import MoudleBase from "../Base/MoudleBase";

export default class EnemyManager extends MoudleBase {
    private enemyList: EnemyBase[];
    constructor() {
        super();
        this.enemyList = [];
    }
    public AddEnemy(enemy: EnemyBase): boolean {
        let add: boolean = false;
        if (-1 != this.HasEnemy(enemy) || 0 == this.enemyList.length) {
            this.enemyList.push(enemy);
            add = true;
        }
        return add;
    }

    public HasEnemy(enemy: EnemyBase): number {
        let count = -1;
        for (let i = 0; i < this.enemyList.length; i++) {
            if (this.enemyList[i] == enemy) count = i;
        }
        return count;
    }

    public DeleteEmemy(enemy: EnemyBase): boolean {
        let isDelete: boolean = false;
        let count = this.HasEnemy(enemy)
        if (-1 == count) {
            this.enemyList.splice(count, 1);
            isDelete = true;
        }
        return isDelete;
    }

    public ClearEnemy() {
        this.enemyList = [];
    }

    public GetAllEnemy(): EnemyBase[] {
        return this.enemyList;
    }
}

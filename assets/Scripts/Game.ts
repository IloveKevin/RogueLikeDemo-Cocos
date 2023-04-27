import EnemyManager from "./Manager/EnemyManager";
import MoudleManager from "./Manager/MoudleManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    @property(MoudleManager)
    moudleManager: MoudleManager = null;
    protected onLoad(): void {
        this.moudleManager.AddMoudle(EnemyManager.name, new EnemyManager());
    }
}

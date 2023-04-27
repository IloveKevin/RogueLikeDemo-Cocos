import EnemyBase from "./Base/EnemyBase";
import MouseMouveDate from "./EventDate/MouseMouveDate";
import EnemyManager from "./Manager/EnemyManager";
import EventManager, { EventType } from "./Manager/EventManager";
import FSMManager from "./Manager/FSMManager";
import MoudleManager from "./Manager/MoudleManager";
import Player from "./Player";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    @property(MoudleManager)
    moudleManager: MoudleManager = null;
    @property(cc.Prefab)
    playerPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    enemyPrefab: cc.Prefab = null;
    @property(cc.Prefab)
    defaultWeaponPrefab: cc.Prefab = null;
    protected onLoad(): void {
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.MouseMove, this);
        this.Init();
    }

    public MouseMove(e: cc.Event.EventMouse) {
        EventManager.GetInstance().Send(EventType.MouseMove, new MouseMouveDate(this, e.getLocation()));
    }

    private Init() {
        this.moudleManager.AddMoudle(EnemyManager.name, new EnemyManager());
        this.moudleManager.AddMoudle(FSMManager.name, new FSMManager());
    }

    protected start(): void {
        this.InitPlayer();
        let newEnemy = cc.instantiate(this.enemyPrefab);
        newEnemy.setParent(this.node);
        newEnemy.setPosition(0, 0);
        let enemy = newEnemy.getComponent(EnemyBase);
        enemy.Init(this);
    }

    private InitPlayer() {
        let newPlayer = cc.instantiate(this.playerPrefab);
        newPlayer.setParent(this.node);
        newPlayer.setPosition(0, 0);
        let player = newPlayer.getComponent(Player);
        player.Init(this);
    }

    protected onDestroy(): void {
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.MouseMove, this);
    }
}

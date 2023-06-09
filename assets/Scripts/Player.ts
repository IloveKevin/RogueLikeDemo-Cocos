import PlayerIdle from "./AnimatorState/Player/PlayerIdel";
import PlayerMove from "./AnimatorState/Player/PlayerMove";
import PlayerRun from "./AnimatorState/Player/PlayerRun";
import EnemyBase from "./Base/EnemyBase";
import RoleBase from "./Base/RoleBase";
import EnemyDetector from "./EnemyDetector";
import Game from "./Game";
import EventManager, { EventType } from "./Manager/EventManager";
import FSMManager from "./Manager/FSMManager";
import DefaultWeapon from "./Weapon/DefaultWeapon";
import WeaponHolder from "./WeaponHolder";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends RoleBase {
    @property(WeaponHolder)
    public weaponHolder: WeaponHolder = null;
    @property(EnemyDetector)
    public enemyDetector: EnemyDetector = null;
    public target: EnemyBase;
    public autoFire: boolean;
    private canFire: boolean;
    private runSpeed: number;

    protected onLoad(): void {
        EventManager.GetInstance().On(EventType.MouseDown, this.OnMouseDown.bind(this));
        EventManager.GetInstance().On(EventType.MouseUp, this.OnMouseUp.bind(this));
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.OnKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.OnKeyUp, this);
    }

    public GetRunSpeed(): number {
        return this.runSpeed;
    }

    public PlayerInit(game: Game) {
        super.RoleBaseInit(game);
        this.runSpeed = this.roleAsset.json.runSpeed;
        this.autoFire = false;
        this.canFire = false;
        this.weaponHolder.WeaponHolderInit(this);
        this.enemyDetector.EnemyDetectorInit(this);
        this.animator = (<FSMManager>this.game.moudleManager.GetMoudle(FSMManager.name)).GetAnimator("PlayerAnimator");
        this.animator.AddState("PlayerIdle", new PlayerIdle(this));
        this.animator.AddState("PlayerMove", new PlayerMove(this));
        this.animator.AddState("PlayerRun", new PlayerRun(this));
        this.animator.ChangeState("PlayerIdle");
        let newDefaultWeapon = cc.instantiate(this.game.defaultWeaponPrefab);
        let defaultWeapon = newDefaultWeapon.getComponent(DefaultWeapon);
        defaultWeapon.WeaponBaseInit(this.weaponHolder);
        this.weaponHolder.ChangeWeapon(defaultWeapon);
    }

    private OnMouseDown() {
        this.canFire = true;
    }

    private OnMouseUp() {
        this.canFire = false;
    }

    private OnKeyDown(event: cc.Event.EventKeyboard) {
        if (this.animator != null) this.animator.OnkeyDown(event);
    }
    private OnKeyUp(event: cc.Event.EventKeyboard) {
        if (this.animator != null) this.animator.OnkeyUp(event);
    }

    protected onDestroy(): void {
        EventManager.GetInstance().Off(EventType.MouseDown, this.OnMouseDown.bind(this));
        EventManager.GetInstance().Off(EventType.MouseUp, this.OnMouseUp.bind(this));
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.OnKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.OnKeyUp, this);
    }

    protected update(dt: number): void {
        if ((this.target && this.autoFire) || this.canFire) this.weaponHolder.TryFire();
    }
}


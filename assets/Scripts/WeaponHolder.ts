import BulletBase from "./Base/BulletBase";
import RogueLikeObjectBase from "./Base/RogueLikeObjectBase";
import WeaponBase from "./Base/WeaponBase";
import MouseDate from "./EventDate/MouseDate";
import EventManager, { EventType } from "./Manager/EventManager";
import Player from "./Player";
import Util from "./Util/Util";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WeaponHolder extends RogueLikeObjectBase {
    public player: Player;
    public weapon: WeaponBase;
    public bullet: BulletBase;
    protected onLoad(): void {
        EventManager.GetInstance().On(EventType.MouseMove, this.OnMouseMove.bind(this));
    }

    public OnMouseMove(date: MouseDate) {
        let dir = date.MousePos.sub(Util.GetNodeWorldPos(this.node));
        let rotation = cc.misc.radiansToDegrees(dir.angle(cc.Vec2.UP));
        let scaleX = 1;
        if (dir.x < 0) {
            rotation = -rotation;
            scaleX = -1;
        }
        this.weapon.node.scaleX = scaleX;
        this.weapon.node.angle = -rotation;
    }

    public WeaponHolderInit(player: Player) {
        this.player = player;
        super.Init(player.game);
    }

    public ChangeWeapon(weapon: WeaponBase) {
        this.weapon = weapon;
        weapon.node.setParent(this.node);
        weapon.node.setPosition(0, 0);
    }

    public TryFire() {
        if (!this.weapon) return;
        this.weapon.TryFire();
    }

    protected onDestroy(): void {
        EventManager.GetInstance().Off(EventType.MouseMove, this.OnMouseMove.bind(this));
    }
}

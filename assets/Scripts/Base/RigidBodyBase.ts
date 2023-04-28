import Game from "../Game";
import RogueLikeObjectBase from "./RogueLikeObjectBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RigidBodyBase extends RogueLikeObjectBase {
    protected rb: cc.RigidBody;
    public RigidBodyBaseInit(game: Game) {
        super.Init(game);
        this.rb = this.node.getComponent(cc.RigidBody);
    }
}

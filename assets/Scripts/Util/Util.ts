export default class Util {
    public static GetNodeWorldPos(node: cc.Node): cc.Vec2 {
        return node.parent.convertToWorldSpaceAR(node.getPosition());
    }

    public static GetWorldPosToNodePos(node: cc.Node, WorldPos: cc.Vec2): cc.Vec2 {
        return node.convertToNodeSpaceAR(WorldPos)
    }
}

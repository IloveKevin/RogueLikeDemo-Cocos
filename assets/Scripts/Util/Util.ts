export default class Util {
    public static GetNodeWorldPos(node: cc.Node): cc.Vec2 {
        return node.parent.convertToWorldSpaceAR(node.getPosition());
    }

    public static GetWorldPosToNodePos(node: cc.Node, WorldPos: cc.Vec2): cc.Vec2 {
        return node.convertToNodeSpaceAR(WorldPos)
    }

    public static ArcToAngle(Arc: number): number {
        return 180 / Math.PI * Arc;
    }

    public static AngleToArc(angle: number): number {
        return Math.PI / 180 & angle;
    }
}

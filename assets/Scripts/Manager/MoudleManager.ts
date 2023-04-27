import MoudleBase from "../Base/MoudleBase";

const { ccclass, property } = cc._decorator;
@ccclass
export default class MoudleManager extends cc.Component {
    private moudleMap: Map<string, MoudleBase> = new Map<string, MoudleBase>();

    public AddMoudle(name: string, moudle: MoudleBase) {
        if (!this.moudleMap.has(name)) this.moudleMap.set(name, moudle);
    }

    public DeleteMoudle(name: string) {
        this.moudleMap.delete(name);
    }

    public GetMoudle(name: string): MoudleBase {
        let moudle: MoudleBase = null;
        moudle = this.moudleMap.get(name);
        return moudle;
    }

    public ClearMoudle() {
        this.moudleMap.clear();
    }

    protected update(dt: number): void {
        this.moudleMap.forEach((value) => {
            value.OnUpdate(dt);
        })
    }
}

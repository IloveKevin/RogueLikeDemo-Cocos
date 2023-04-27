import Game from "../Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RogueLikeObjectBase extends cc.Component {
    public game: Game;
    public Init(game: Game) {
        this.game = game;
    }
}

import { Player } from "../entities/Player/player";
import type { IPlayer } from "../entities/Player/model";
import { MapRender } from "../entities/MapRender";
import mapDataJson from '../shared/assets/map/map2.json';
import type { ITileMap } from "../shared/types/tiledTypes";
import { MonoBehaviour } from "../shared/Engine/MonoBehaviour";
import type { ICamera } from "../entities/Camera";
import { Camera } from "../entities/Camera";
import { NpcManager } from "../entities/NPC";
import { CollisionManager } from "../shared/Engine/ColliderManager";
import { ModalHandler } from "../entities/ModalHandler";


const map: ITileMap = mapDataJson as ITileMap;

export interface IGame { 
    start:() => void;
}
export class Game extends MonoBehaviour { 
    context:CanvasRenderingContext2D;
    player:IPlayer;
    map:MapRender;
    camera:ICamera; 
    canvas:HTMLCanvasElement;
    npc:NpcManager;
    collision:CollisionManager;
    modalHandler:ModalHandler;
    constructor(context:CanvasRenderingContext2D,canvas:HTMLCanvasElement) { 
        super();
        this.canvas = canvas
        this.context = context;
        this.camera = new Camera(this.canvas.width,this.canvas.height,485,225);
        this.collision = new CollisionManager(map);
        this.player = new Player(this.context,this.camera,this.collision);
        this.map = new MapRender(this.context,map);
        this.npc = new NpcManager(map);
        this.modalHandler = new ModalHandler(this.context);
    }
    update(){ 
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.map.draw(this.camera);
        this.npc.draw(this.context,this.camera.x,this.camera.y)
        this.player.drawElement();
        this.modalHandler.drawElement();
    }
    start () {         
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.map.draw(this.camera);
        this.npc.draw(this.context,this.camera.x,this.camera.y)
        this.player.drawElement();
        this.modalHandler.drawElement();
    };
}
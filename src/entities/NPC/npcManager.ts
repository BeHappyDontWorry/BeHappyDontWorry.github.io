import { NPC } from './npc';
import type { ITileMap } from '../../shared/types/tiledTypes';
import characters from '../../shared/assets/kenney_roguelike-characters/Spritesheet/roguelikeChar_transparent.png';


export class NpcManager { 
    npcs: NPC[] = [];

  constructor(map: ITileMap) {
    const objectLayers = map.layers.filter(l => l.type === 'objectgroup');

    for (const layer of objectLayers) {
      //@ts-ignore
      for (const obj of layer.objects) {
        if (obj.type === 'NPC') {
          const img = new Image();
          img.src = characters; 
          const npc = new NPC(
            obj.name, 
            obj.class, 
            obj.x, 
            obj.y, 
            img,
            obj.imgPosition.x,
            obj.imgPosition.y
          );
          this.npcs.push(npc);
        }
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D, cameraX: number, cameraY: number) {
    for (const npc of this.npcs) {
      npc.draw(ctx, cameraX, cameraY);
    }
  }

}
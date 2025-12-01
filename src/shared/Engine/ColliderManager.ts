import type { IColliderObject } from "../types/ICollider";
import type { ITileMap } from "../types/tiledTypes";

export class CollisionManager {
  private colliders: IColliderObject[] = [];

  constructor(map: ITileMap) {
    const collisionLayers = map.layers.filter(
      (layer: any) => layer.type === "objectgroup" && layer.name === "Collisions"
    );

    for (const layer of collisionLayers) {
        //@ts-ignore
      for (const obj of layer.objects) {
        if (obj.name === "Collider") {
          this.colliders.push({
            id: obj.id,
            x: obj.x,
            y: obj.y,
            width: obj.width,
            height: obj.height,
            name: obj.name,
          });
        }
      }
    }
  }

  public getColliders() {
    return this.colliders;
  }
}

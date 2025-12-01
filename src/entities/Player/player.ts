import folo from "../../shared/assets/kenney_roguelike-characters/Spritesheet/roguelikeChar_transparent.png";
import { MonoBehaviour } from "../../shared/Engine/MonoBehaviour";
import type { IPlayer } from "./model";
import { EventManager } from "../../shared/helpers/EventManager";
import { InputTypes } from "../../shared/types/inputTypes";
import type { ICamera } from "../Camera";
import { CollisionManager } from "../../shared/Engine/ColliderManager";
import AABB from "../../shared/helpers/AxisAlignedBoundingBox";
import { setStoreField } from "../../shared/Engine/Storage";
const tileSize = 16;
// const margin = 1;
const mapWidth = 485;
const mapHeight = 225;

export class Player extends MonoBehaviour implements IPlayer {
  context: CanvasRenderingContext2D;
  characterSprite?: HTMLImageElement | null;
  camera: ICamera;
  private x: number = 360;
  private y: number = 208;
  private speed: number = 16;
  collisionManager: CollisionManager;
  constructor(
    context: CanvasRenderingContext2D,
    camera: ICamera,
    collision: CollisionManager
  ) {
    super();
    this.context = context;
    this.camera = camera;
    this.collisionManager = collision;
  }
  public drawElement(): void {
    // const tilesPerRow = Math.floor(
    //   this.characterSprite?.width || 1 / (tileSize + margin)
    // );
    // const sx = (1 % tilesPerRow) * (tileSize + margin);
    // const sy = Math.floor(1 / tilesPerRow) * (tileSize + margin);

    if (this.characterSprite) {
      this.camera.follow(this.x, this.y);
      const xPosition = this.x - this.camera.x;
      const yPosition = this.y - this.camera.y;
      this.context.drawImage(
        this.characterSprite,
        17,
        138,
        tileSize,
        tileSize,
        xPosition,
        yPosition,
        16,
        16
      );
    }
  }
  protected beforeStart(): void {
    let image = new Image();
    image.src = folo;
    image.onload = () => {
      this.characterSprite = image;
    };
    EventManager.subscribe(InputTypes.ARROWUP, (e) => {
      e?.preventDefault();
      this.move(0, -this.speed);
    });
    EventManager.subscribe(InputTypes.ARROWDOWN, (e) => {
      e?.preventDefault();
      this.move(0, this.speed);
    });
    EventManager.subscribe(InputTypes.ARROWLEFT, (e) => {
      e?.preventDefault();
      this.move(-this.speed, 0);
    });
    EventManager.subscribe(InputTypes.ARROWRIGHT, (e) => {
      e?.preventDefault();
      this.move(this.speed, 0);
    });
  }
  private move(dx: number, dy: number) {
    const nextX = this.x + dx;
    const nextY = this.y + dy;
    const playerWidth = 16;
    const playerHeight = 16;

    const clampedX = Math.max(0, Math.min(nextX, mapWidth - playerWidth));
    const clampedY = Math.max(0, Math.min(nextY, mapHeight - playerHeight));

    const playerBox = {
      x: nextX,
      y: nextY,
      w: 16,
      h: 16,
    };
    const activeCollitions = this.collisionManager
      .getColliders()
      .filter((col) => {
        const cbox = {
          x: col.x,
          y: col.y,
          w: col.width,
          h: col.height,
          id: col.id,
        };
        return AABB(playerBox, cbox);
      });
    if (activeCollitions.length > 0) {
      activeCollitions.forEach((collition) => {
        setStoreField("colliders", collition);
      });
    } else {
      setStoreField("colliders", {});
    }

    this.x = clampedX;
    this.y = clampedY;
  }
  protected start(): void {}
}

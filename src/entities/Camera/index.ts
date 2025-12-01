import type { ICamera } from "./model";

export class Camera implements ICamera{
    x: number = 0;
    y: number = 0;
    width: number;
    height: number;
    worldWidth: number;
    worldHeight: number; 

    constructor(width: number, height: number, worldWidth: number, worldHeight: number) {
        this.width = width;
        this.height = height;
        this.worldWidth = worldWidth;
        this.worldHeight = worldHeight;
    }
    follow(targetX: number, targetY: number) { 
        this.x = targetX - this.width / 2;
        this.y = targetY - this.height / 2;
        
        this.x = Math.max(0, Math.min(this.x, this.worldWidth - this.width));
        this.y = Math.max(0, Math.min(this.y, this.worldHeight - this.height));
    };
}
export type {ICamera} from './model';
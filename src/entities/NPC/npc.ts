interface INpc {
    name: string;
    classType: string;
    x: number;
    y: number;
    sprite: HTMLImageElement;

}

const tileSize = 16;
// const margin = 1;
export class NPC implements INpc { 
    name: string;
    classType: string;
    x: number;
    y: number;
    sprite: HTMLImageElement;
    spritePositionX:number;
    sptitePositionY:number;

    constructor (
        name:string,
        classType:string,
        x:number,
        y:number,
        sprite:HTMLImageElement,
        spritePositionX:number,
        sptitePositionY:number,
    ) { 
        this.classType = classType;
        this.name = name;
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.spritePositionX = spritePositionX;
        this.sptitePositionY = sptitePositionY;
    }
    public draw(ctx: CanvasRenderingContext2D, cameraX: number, cameraY: number) {
        const xPosition = this.x - cameraX; 
        const yPosition = this.y - cameraY;
        ctx.drawImage(this.sprite,this.spritePositionX,this.sptitePositionY, tileSize,tileSize,xPosition,yPosition,16,16);
    }
}
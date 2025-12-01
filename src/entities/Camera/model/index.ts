export interface ICamera { 
    x:number;
    y:number;
    width:number;
    height: number;
    worldWidth: number;
    worldHeight: number;
    follow:(targetX: number, targetY: number) => void;
}
export interface IColliderObject {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string; 
  properties?: { name: string; value: any }[];
}

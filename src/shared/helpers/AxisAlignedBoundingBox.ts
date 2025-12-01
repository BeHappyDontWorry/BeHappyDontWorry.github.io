export default function AxisAlignedBoundingBox(a: {x:number, y:number, w:number, h:number},
              b: {x:number, y:number, w:number, h:number}) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

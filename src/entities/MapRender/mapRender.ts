import tileMap from '../../shared/assets/kenney_tiny-town/Tilemap/tilemap.png';
import type { ITileMap } from "../../shared/types/tiledTypes";
import type { ICamera } from '../Camera';

interface ILoadedTileset {
  firstgid: number;
  image?: HTMLImageElement;
  imageWidth: number;
  imageHeight: number;
}
const spacing = 1;

const tiles = [
  {
    firstgid: 1,
    image: tileMap,
  },
  
];
const img = new Image();
img.src = tileMap;
export class MapRender {
  private context: CanvasRenderingContext2D;
  private map: ITileMap;
  private tileSize: number;
  private tilesets: ILoadedTileset[] = [];
  
  constructor(ctx: CanvasRenderingContext2D, map: ITileMap) {
    this.context = ctx;
    this.map = map;
    this.tileSize = map.tilewidth;
    tiles.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      console.log(img.width,img.height);
      this.tilesets.push({
        firstgid: item.firstgid,
        image: img,
        imageWidth: img.width > 0 ? img.width : 200,
        imageHeight: img.height > 0 ? img.height : 200
      });
    });
  }
  protected start(): void {
      this.draw();
  }
  public draw(camera?: ICamera) {
    for (const layer of this.map.layers) {
      if (!layer.visible || !layer.chunks) continue;

      for (const chunk of layer.chunks) {
        let index = 0;

        for (let y = 0; y < chunk.height; y++) {
          for (let x = 0; x < chunk.width; x++) {
            const tileId = chunk.data[index++];
            if (tileId === 0) continue;

            const tileset = [...this.tilesets].find(ts => tileId >= ts.firstgid);
            
            if (!tileset) continue;

            const localId = tileId - tileset.firstgid;
            const tilesPerRow = Math.floor(tileset.imageWidth / this.tileSize);
            const sx = (localId % tilesPerRow) * (this.tileSize + spacing);
            const sy = Math.floor(localId / tilesPerRow) * (this.tileSize + spacing);
            
            const screenX = (chunk.x + x) * this.tileSize - (camera?.x ?? 0);
            const screenY = (chunk.y + y) * this.tileSize - (camera?.y ?? 0);
            this.context.drawImage(
              img,
              sx,
              sy,
              this.tileSize,
              this.tileSize,
              screenX,
              screenY,
              this.tileSize,
              this.tileSize
            );
          }
        }
      }
    }
  }
}

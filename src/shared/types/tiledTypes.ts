export interface ITileMap {
  compressionlevel: number;
  height: number;
  infinite: boolean;
  layers: ITileLayer[];
  nextlayerid: number;
  nextobjectid: number;
  orientation: "orthogonal" | "isometric" | "staggered" | "hexagonal";
  renderorder: string;
  tiledversion: string;
  tileheight: number;
  tilesets: ITileset[];
  tilewidth: number;
  type: string;
  version: string | number;
  width: number;
}

export interface ITileLayer {
  chunks: IChunk[];
  height: number;
  
  id: number;
  name: string;
  opacity: number;
  startx: number;
  starty: number;
  type: string;
  visible: boolean;
  width: number;
  x: number;
  y: number;
}

export interface IChunk {
  data: number[];   // массив ID тайлов (0 — пусто)
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface ITileset {
  firstgid: number;
  source: string;   // путь к .tsx файлу
}

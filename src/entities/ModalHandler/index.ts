import { MonoBehaviour } from "../../shared/Engine/MonoBehaviour";
import { getStoreField } from "../../shared/Engine/Storage";

export class ModalHandler extends MonoBehaviour { 
    ctx: CanvasRenderingContext2D;
    notification:HTMLDivElement = document.getElementById('notification') as HTMLDivElement;
    constructor(ctx:CanvasRenderingContext2D) { 
        super();
        this.ctx = ctx;
    }
    public drawElement(): void {
        const modalID = getStoreField('colliders');
        if(modalID.id){ 
            this.notification.classList.add('animate');
            // const text = "Press E";
            // this.ctx.save();
    
            // this.ctx.font = "16px Arial";
            // this.ctx.fillStyle = "white";
            // this.ctx.textBaseline = "bottom";
            // this.ctx.textAlign = "right";
    
            // const x = this.ctx.canvas.width - 10;
            // const y = this.ctx.canvas.height - 10;
    
            // this.ctx.fillText(text, x, y);
    
            // this.ctx.restore();
        }
        else{ 
            this.notification.classList.remove('animate');
        }
    }
    drawPressEText() {

    }

}
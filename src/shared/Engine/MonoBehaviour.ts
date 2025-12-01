const instances:MonoBehaviour[] = [];
export class MonoBehaviour {
    constructor() {
        if (this.beforeStart) this.beforeStart();
        setTimeout(() => {
            if (this.start) this.start();
        }, 0);

        instances.push(this);
    }
    protected drawElement():void{}
    protected beforeStart(): void {}
    protected start(): void {}
    protected update(): void {}

    static updateAll() {
        for (const instance of instances) {
            if (instance.update) instance.update();
        }
        requestAnimationFrame(MonoBehaviour.updateAll);
    }

    public static run(): void {
        requestAnimationFrame(MonoBehaviour.updateAll);
    }
   
}
MonoBehaviour.run();

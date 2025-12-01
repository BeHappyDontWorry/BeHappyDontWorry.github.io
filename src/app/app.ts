import { Game } from "./game";
import type {IGame} from './game';

export class App { 
    canvas:HTMLCanvasElement = document.getElementById('game') as HTMLCanvasElement;
    mute:HTMLButtonElement = document.getElementById('mute') as HTMLButtonElement;
    sound:HTMLButtonElement = document.getElementById('sound') as HTMLButtonElement;
    audio:HTMLAudioElement = document.getElementById('audio') as HTMLAudioElement;
    private game:IGame = new Game(
        this.canvas.getContext('2d') as CanvasRenderingContext2D,
        this.canvas,
    );
    run() { 
        this.mute.addEventListener('click',() => { 
            this.sound.classList.add('active');
            this.mute.classList.remove('active');
            this.audio.play();
        })
        this.sound.addEventListener('click',() => { 
            this.mute.classList.add('active');
            this.sound.classList.remove('active');
            this.audio.pause();
            this.audio.currentTime = 0; 
        })

        this.game.start();
    }
}
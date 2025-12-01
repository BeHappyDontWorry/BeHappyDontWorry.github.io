import { EventManager } from "../helpers/EventManager";
import { InputTypes,InputHandledKeys } from "../types/inputTypes";
import { getStoreField } from "./Storage";

interface IInputSystem { 

}
export let firedInputKey:Record<number,InputTypes> = {};


export abstract class InputSystem implements IInputSystem { 
   private static initialized = false;
   
   public static init() {
      if (this.initialized) return;
      this.initialized = true;
   const modals = document.querySelectorAll(".modal");

   window.addEventListener('keyup',(e) => {
      const modalID = getStoreField('colliders');
       if (e.code === "KeyE" && !e.repeat && modalID.id) {
          modals.forEach((element)=> { 
            if(Number(element.id) === Number(modalID.id)){ 
               element?.classList.toggle("open");
            }
             
         })
       }
      const exist = InputHandledKeys[e.keyCode];
      if(exist){ 
         delete firedInputKey[exist];
      }         
   })
   window.addEventListener('keydown',(e) => {
      
      const exist = InputHandledKeys[e.keyCode];
      if(exist) { 
         firedInputKey = {...firedInputKey,[e.keyCode]:exist};
         Object.values(firedInputKey).forEach((item) => { 
            EventManager.notify(item);
         })
      }
   })
  }
}

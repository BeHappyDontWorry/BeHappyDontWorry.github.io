import { InputTypes } from "../types/inputTypes";

type EventTypes = InputTypes | 'CollitionAviable';

type EventMap = {
    [K in EventTypes]: Function[];
};

const events:EventMap= {
    [InputTypes.ARROWUP]: [],
    [InputTypes.ARROWDOWN]: [],
    [InputTypes.ARROWLEFT]: [],
    [InputTypes.ARROWRIGHT]: [],
    [InputTypes.E]:[],
    'CollitionAviable':[function(){
        console.log('do something');
    },]
};

export abstract class EventManager { 

    static subscribe(eventType:EventTypes,func:(e?:Event) => void) { 
        events[eventType].push(func);

    }
    static unsubscribe(eventType:EventTypes,func:() => void) { 
        events[eventType] = events[eventType].filter(f => f !== func);
    }
    static notify(eventType:EventTypes) { 
        events[eventType].forEach((func) => func());
    }
}
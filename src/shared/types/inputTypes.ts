export enum InputTypes { 
    ARROWUP = 38,
    ARROWDOWN = 40,
    ARROWLEFT = 37,
    ARROWRIGHT = 39,
    E=69,
}
export const InputHandledKeys:Record<number,InputTypes> = {
    38: InputTypes.ARROWUP,
    40: InputTypes.ARROWDOWN,
    37:InputTypes.ARROWLEFT,
    39: InputTypes.ARROWRIGHT,
    69:InputTypes.E
}
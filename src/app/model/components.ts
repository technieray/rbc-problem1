export interface GeneraicComponents{
    width?:number;
    class?:string;
    style?:string;
    name:string;
    labelTxt:string;
    placeholder?:string;
    tooltip?:string;
    format?:string;
    min?:number;
    max?:number;
    options?: KeyValuePair[];
    type:string;
    value?:any;
}

interface KeyValuePair {
    key: string;
    value: any;
}
export interface Panel{
    components:GeneraicComponents[];
    headerTxt:string;
    
}



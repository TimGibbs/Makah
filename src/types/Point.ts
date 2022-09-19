export  type Point = number | "-"

export default Point;

export function asPoint(input : any): Point| undefined
{
    if(input === "-" || typeof input === "number") return input;
    if(input === "") return undefined
    if(typeof input === "string")return parseInt(input);
    return undefined
}
import Equipment from "./Equipment"
import FactionAbility from "./FactionAbility"
import OperativeBase from "./OperativeBase"
import Weapon from "./Weapon"

export type Faction = 
{
    name:string
    slug:string
    quote:string
    attribution?:string
    operativeTypes:OperativeBase[]
    operativeNotes?:string[]
    weapons:Weapon[],
    equipment:Equipment[],
    ability:FactionAbility
}
export default Faction;
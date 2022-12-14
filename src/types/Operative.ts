import Equipment from "./Equipment";
import OperativeBase from "./OperativeBase";
import Skill from "./Skill";
import Weapon from "./Weapon";

export type Operative = OperativeBase & 
{
    name:string
    isLeader: boolean
    isPsyker: boolean
    weapons:Weapon[]
    equipment:Equipment[]
    skills:Skill[]
} 
export default Operative


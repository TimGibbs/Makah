import Equipment from "../../../types/Equipment";
import {Daemonic as DaemonicBase} from '../../BaseEquipment'

export const CollarOfKhorne : Equipment = 
{
    name:"Collar of Khorne",
    effect:"This operative and any friendly operatives within 3\" can never be targeted or effected by Psychic powers.",
    pt:4
}

export const LegacyOfHate : Equipment = 
{
    name:"Legacy of Hate",
    effect:"Any combat weapons used by this Operative gain Brutal 1 or increase the value of their weapons’ Brutal rule by 1. This weapon also gains the Reckless rule.",
    pt:3
}

export const SkullTrophies : Equipment = 
{
    name:"Skull Trophies",
    effect:"If this Operative causes damage from an Impact hit, the damaged Operative receives an Evade token.",
    pt:3
}

export const GoreFist : Equipment = 
{
    name:"Gore fist",
    effect:"This Operative gains +1 dice when Fighting Back.",
    pt:2
}

export const Daemonic : Equipment =
{
    ...DaemonicBase,
    restrictons:"Bloodletter Only"
}


const CultOfSlaughterEquipment : Equipment[] =
[
    CollarOfKhorne,
    LegacyOfHate,
    SkullTrophies,
    GoreFist,
    Daemonic,
]
export default CultOfSlaughterEquipment;
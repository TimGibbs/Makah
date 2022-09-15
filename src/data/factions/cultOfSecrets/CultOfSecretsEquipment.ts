import Equipment from "../../../types/Equipment";
import {Daemonic as DaemonicBase} from '../../BaseEquipment'

export const AethericInfusion : Equipment = 
{
    name:"Aetheric infusion",
    effect:"Increase the Attack value of this Operative’s Warpflame and Inferno weapons by 1.",
    pt:5
}

export const PsychicMastery : Equipment = 
{
    name:"Psychic Mastery",
    effect:"This Operative may use the Psychic Power action twice per activation.",
    restrictons:"Sorcerer Only",
    pt:5
}

export const Daemonic : Equipment =
{
    ...DaemonicBase,
    restrictons:"Horrors Only"
}

export const Split : Equipment = 
{
    name:"Split",
    effect:"When a Pink Horror is reduced to 0 wounds, do not roll on the Injury Table. Immediately replace that model with a Blue Horror equipped with ‘Claws and Teeth’ and ‘Coruscating flames’. When a Blue Horror is reduced to 0 wounds, do not roll on the Injury Table, immediately remove the model from the board.",
    restrictons:"Horrors Only",
    pt:0
}

const CultOfSecretsEquipment : Equipment[] =
[
    AethericInfusion,
    PsychicMastery,
    Daemonic,
    Split
]

export default CultOfSecretsEquipment;
import Equipment from "../../../types/Equipment";
import {Daemonic as DaemonicBase} from '../../BaseEquipment'

export const CloudOfFlies : Equipment = 
{
    name:"Cloud of flies",
    effect:"If a Shooting attack originates from more than 6\" away treat this operative as being in cover even if they're not in cover.",
    pt:4
}

export const ParticularlyNastyPus : Equipment = 
{
    name:"Particularly nasty pus",
    effect:"Any combat weapons used by this Operative gain Poison 1 or increase the value of their weapons’ Poison rule by 1.",
    pt:2
}

export const PartingGift : Equipment = 
{
    name:"Parting gift",
    effect:"When this Operative is Injured or Critically Injured, remove them from the table and each enemy Operative within 3\" suffers d3 Damage, this can be saved but can’t be Evaded.",
    pt:2
}

export const SigilOfDecay : Equipment = 
{
    name:"Sigil of decay",
    effect:"Bolt weapons used by this Operative gain Rot 1.",
    pt:2
}

export const Daemonic : Equipment =
{
    ...DaemonicBase,
    restrictons:"Nurglings and Plague Bearers Only"
}

const CultOfTheGiftEquipment : Equipment[] =
[
    CloudOfFlies,
    ParticularlyNastyPus,
    PartingGift,
    SigilOfDecay,
    Daemonic
]

export default CultOfTheGiftEquipment;
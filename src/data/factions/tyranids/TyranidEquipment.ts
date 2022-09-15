import Equipment from "../../../types/Equipment";

export const AdrenalGlands : Equipment = 
{
    name:"Adrenal Glands",
    effect:"Add 1\" to this Operative’s Movement characteristic.",
    pt:3
}

export const ToxinSacs2 : Equipment = 
{
    name:"Toxin Sacs",
    effect:"Add Poison 2 to this Operative’s Combat weapons.",
    restrictons:"2 Actions Only",
    pt:1
}

export const ToxinSacs3 : Equipment = 
{
    name:"Toxin Sacs",
    effect:"Add Poison 2 to this Operative’s Combat weapons.",
    restrictons:"3 Actions Only",
    pt:4
}

export const GargoyleAdaptation : Equipment = 
{
    name:"Gargoyle adaptation",
    effect:"Increase this Operative’s Movement characteristic to 8\" and they gain the Fly skill.",
    restrictons:"Termagant Only",
    pt:4
}

export const AlphaPredator : Equipment = 
{
    name:"Alpha Predator",
    effect:"Enemy Operatives beyond 8” cannot shoot this Operative if it is in cover. There Operative’s save cannot be reduced below 5+.",
    restrictons:"Lictor Only",
    pt:7
}

export const Purestrain : Equipment = 
{
    name:"Purestrain",
    effect:"This Operative can Charge twice in one Activation. It is always treated as having an Evade token when being Shot at.",
    restrictons:"Genestealer Only",
    pt:10
}

export const WarpShield  : Equipment = 
{
    name:"Warp Shield",
    effect:"This Operative’s save cannot be modified by AP.",
    restrictons:"Zoanthrope Only",
    pt:0
}

const TyranidEquipment : Equipment[] = 
[
    AdrenalGlands,
    ToxinSacs2,
    ToxinSacs3,
    GargoyleAdaptation,
    AlphaPredator,
    Purestrain,
    WarpShield
]

export default TyranidEquipment;
import onlyUnique from "../../../functions/OnlyUnique"
import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from "../../weapons/GenericWeapons"
import ImperialWeaponsList from "../../weapons/ImperialWeapons"
import MechanicusEquipmentList from "./MechanicusEquipment"
import MechanicusOperatives from "./MechanicusOperatives"
import MechanicusWeapons from "./MechanicusWeapons"

const Name : string = "Adeptus Mechanicus"

export const Shroudpsalm: FactionAbility =
{
    name: "Shroudpsalm",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Shroudpsalm. That turn, all Shooting attacks targeting your Operative are at -1 to hit if they come from further than 6\" away."
}

export const Mechanicus : Faction =
{
    name:Name,
    slug:"mechanicus",
    quote:"\"There is no truth in flesh, only betrayal.\"\n\"There is no strength in flesh, only weakness.\"\n\"There is no constancy in flesh, only decay.\"\n\"There is no certainty in flesh but death.\"",
    attribution:"Credo Omnissiah",
    operativeTypes:MechanicusOperatives, 
    operativeNotes:["Your Leader must be an Inquisitor","You must pick an Ordo for your faction."],
    weapons:[...MechanicusWeapons, ...GenericWeaponsList,...ImperialWeaponsList].filter(onlyUnique),
    equipment:MechanicusEquipmentList,
    ability:Shroudpsalm
}
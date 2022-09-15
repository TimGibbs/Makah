import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import onlyUnique from './../../../functions/OnlyUnique';

import { ReactComponent as icon} from '../../../Images/factionIcons/Khorne.svg'
import background from '../../../Images/factionIcons/Khorne.svg'
import ImperialWeaponsList from "../../weapons/ImperialWeapons";
import ChaosCultWeapons from "../chaosCult/ChaosCultWeapons";
import CultOfSlaughterOperatives from "./CultOfSlaughterOperatives";
import CultOfSlaughterWeapons from "./CultOfSlaughterWeapons";
import CultOfSlaughterEquipment from "./CultOfSlaughterEquipment";

const Name : string = "Cult of Slaughter"

export const BloodForTheBloodGod:FactionAbility =
{
    name: "Blood for the Blood God!",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Blood for the Blood God! This turn all of your Combat weapons receive +1 Attack. In addition, +1\" to all Charge actions."
}

export const CultOfSlaughter: Faction =
{
    name:Name,
    slug:"khorne",
    icon: icon,
    background:background,
    quote:"\"I have slain many enemies, and won many battles and I tell you there is no great secret to success in war, no subtle trick of strategy that has saved my foes -- I seek out the enemy, attack as soon as I am able and with all the force at my command, rend his soldiers and smash his fortresses, leave only corpses behind me and then move on -- thus my primarch has taught me, and I find his wisdom has proved worthy on a hundred battlefields.\"",
    attribution:"Khârn \"The Bloody\"",
    operativeTypes:CultOfSlaughterOperatives,
    weapons:[...CultOfSlaughterWeapons, ...ImperialWeaponsList, ...ChaosCultWeapons, ...GenericWeaponsList].filter(onlyUnique),
    equipment:CultOfSlaughterEquipment,
    ability:[BloodForTheBloodGod]
}
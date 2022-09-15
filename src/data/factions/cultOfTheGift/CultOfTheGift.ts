import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import onlyUnique from './../../../functions/OnlyUnique';

import { ReactComponent as icon} from '../../../Images/factionIcons/Nurgle.svg'
import background from '../../../Images/factionIcons/Nurgle.svg'
import ImperialWeaponsList from "../../weapons/ImperialWeapons";
import ChaosCultWeapons from "../chaosCult/ChaosCultWeapons";
import CultOfTheGiftOperatives from "./CultOfTheGiftOperatives";
import CultOfTheGiftWeapons from './CultOfTheGiftWeapons';
import CultOfTheGiftEquipment from "./CultOfTheGiftEquipment";
import CultOfTheGiftPsychicPowers from './CultOfTheGiftPsychic';

const Name : string = "Cult of the Gift"

export const FathersGifts:FactionAbility =
{
    name: "Father’s Gifts",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Father’s Gifts. That turn increase the AP of any weapons with the Rot special rule by 1. In addition, whenever one of your Operatives causes damage with a weapon with the Rot special rule, gain 2 wounds."
}

export const CultOfTheGift : Faction =
{
    name:Name,
    slug:"nurgle",
    icon: icon,
    background:background,
    quote:"Nurgle is the Great Lord of Decay and the Master of Plague and Pestilence. All things, no matter how solid and permanent they seem, are liable to eventual corruption and death. Even the process of creation is but the precursor to destruction and decay. The bastion of today is tomorrow's ruin, the maiden of the morning is the crone of the night, and the hope of a moment is but the foundation of regret.\nThough Nurgle is the ultimate creator of every infection and epidemic to have ever swept the universe, Nurgle is not a morose purveyor of despair and gloom, but in fact a vibrant god of life and laughter. In death, there is life.",
    operativeTypes:CultOfTheGiftOperatives,
    weapons:[...CultOfTheGiftWeapons, ...ImperialWeaponsList, ...ChaosCultWeapons, ...GenericWeaponsList].filter(onlyUnique),
    equipment:CultOfTheGiftEquipment,
    psychicPowers:CultOfTheGiftPsychicPowers,
    ability:[FathersGifts]
}
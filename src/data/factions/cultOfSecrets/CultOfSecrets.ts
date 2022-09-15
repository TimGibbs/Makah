import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import onlyUnique from './../../../functions/OnlyUnique';

import { ReactComponent as icon} from '../../../Images/factionIcons/Tzeentch.svg'
import background from '../../../Images/factionIcons/Tzeentch.svg'
import ImperialWeaponsList from "../../weapons/ImperialWeapons";
import ChaosCultWeapons from "../chaosCult/ChaosCultWeapons";
import CultOfSecretsOperatives from './CultOfSecretsOperatives';
import CultOfSecretsWeapons from "./CultOfSecretsWeapons";
import CultOfSecretsEquipment from './CultOfSecretsEquipment';
import CultOfSecretsPsychicPowers from "./CultOfSecretsPsychic";

const Name : string = "Cult of Secrets"

export const WindsOfChange:FactionAbility =
{
    name: "Winds of Change",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Winds of Change. Each player picks up their Initiative cards, shuffles them thoroughly (their opponent can then cut their deck)."
}

export const CultOfSecrets : Faction =
{
    name:Name,
    slug:"tzeentch",
    icon: icon,
    background:background,
    quote:"\"The minds of gods are not for mortals to know, or to judge. Accept that Tzeentch has a place for all of us in his grand scheme, and be happy in the part you have to play.\"",
    attribution:"Proclamation of Magnus the Red",
    operativeTypes:CultOfSecretsOperatives,
    weapons:[...CultOfSecretsWeapons, ...ImperialWeaponsList, ...ChaosCultWeapons, ...GenericWeaponsList].filter(onlyUnique),
    equipment:CultOfSecretsEquipment,
    psychicPowers:CultOfSecretsPsychicPowers,
    ability:[WindsOfChange]
}
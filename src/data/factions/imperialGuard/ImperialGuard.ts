import Faction from "../../../types/Faction"
import FactionAbility from "../../../types/FactionAbility"
import ImperialGuardEquipment from "./ImperialGuardEquipment"
import ImperialGuardOperatives from "./ImperialGuardOperative"
import ImperialGuardWeapons from "./ImperialGuardWeapons"
import GenericWeaponsList from './../../weapons/GenericWeapons';
import ImperialWeaponsList from './../../weapons/ImperialWeapons';
import onlyUnique from "../../../functions/OnlyUnique"

import { ReactComponent as icon} from '../../../Images/factionIcons/Guard.svg'
import background from '../../../Images/factionIcons/Guard.svg'

const Name : string = "Imperial Guard"

export const Orders : FactionAbility = 
{
    name:"Orders",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate an Order. This can have one of the following effects: • Get back in the fight! Remove all [Evade] tokens from friendly Operatives. • First rank fire, second rank fire! Rapid fire Las weapons do not suffer the -1 penalty for a second Shoot action. • Move, move, move! All Operatives can make a second Move action."
}

export const ImperialGuard : Faction =
{
    name:Name,
    slug:"guard",
    icon: icon,
    background:background,
    quote:"\"Men, we are the first, last and often only line of defence the Imperium has against what is out there. You and that fine piece of Imperial weaponry you hold in your hands is all that is keeping humanity alive.\nMost of you will probably not live to see your second year in the Guard and most of you will probably never see your homeworlds again, but I can guarantee you that when you do fall, with a prayer to the most high and mighty God-Emperor on your lips, you will have earned the right to call yourself a man!\" ",
    attribution:"Staff Sergeant Vermak, 12th Cadian Shock Regiment",
    operativeTypes:ImperialGuardOperatives,
    operativeNotes:["Your Leader must be an Officer"],
    weapons:[...ImperialGuardWeapons,...GenericWeaponsList,...ImperialWeaponsList].filter(onlyUnique),
    equipment:ImperialGuardEquipment,
    ability:[Orders]
}
import Faction from "../../../types/Faction";
import FactionAbility from "../../../types/FactionAbility";
import { ReactComponent as icon} from '../../../Images/factionIcons/Tyranids.svg'
import background from '../../../Images/factionIcons/Tyranids.svg'
import TyranidOperatives from './TyranidOperatives';
import TyranidWeapons from "./TyranidWeapons";
import TyranidEquipment from "./TyranidEquipment";
import TyranidPsychicPowers from "./TyranidPsychic";

const Name : string = "Tyranid"

export const Synapse : FactionAbility =
{
    name: "Synapse",
    effect:"Once per game, immediately before rolling to see who goes first, you can activate Synapse. That turn you can activate Operatives in any order, regardless of Initiative cards."
}

export const Tyranids : Faction =
{
    name:Name,
    slug:"tyranids",
    icon: icon,
    background:background,
    quote:"\"There is a cancer eating at the Imperium. With each decade it advances deeper, leaving drained, dead worlds in its wake. This horror, this abomination, has thought and purpose which functions on an unimaginable, galactic scale and all we can do is try to stop the swarms of bio-engineered monsters it unleashes upon us by instinct. We have given the horror a name to salve our fears; we call it the Tyranid race, but if it is aware of us at all it must know us only as Prey.\"",
    attribution:"Inquisitor Bronislaw Czevak at the Conclave of Har",
    operativeTypes:TyranidOperatives, 
    operativeNotes:["Your Leader must be a Warrior"],
    weapons:TyranidWeapons,
    equipment:TyranidEquipment,
    psychicPowers: TyranidPsychicPowers,
    ability:[Synapse]
}


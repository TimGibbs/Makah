import { GenericWeaponsList } from "../../data/GenericWeapons";
import { ImperialWeaponsList } from "../../data/ImperialWeapons";
import { hasProfiles, Weapon } from "../../types/Weapon";
import { WeaponBlock } from "../components/WeaponsBlock";
import WeaponRulePage from './WeaponSpecialRules'


const ImperialWeapons = () => <div>
        <h1>IMPERIAL WEAPONS</h1>
        <p>Despite its vast expanses, thanks largely to the technological innovation of the Standard Template Construct, Imperial
forges produce a surprisingly narrow band of weaponry. Any Imperial faction can draw from this list. Because of the sheer
regularity of looting, Orks may also draw from this list but with each weapon costing +1 point.</p>
        {WeaponBlock(ImperialWeaponsList)}
    </div>


export default ImperialWeapons;
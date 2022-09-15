import clamp from "../../../functions/Clamp";
import { WeaponTileProps } from "./weaponTIle/WeaponTile";

export const weaponSorting  = (a:WeaponTileProps, b:WeaponTileProps) : number => {
        
    const aVal = a.weapon.profiles[0].types[0];
    const bVal = b.weapon.profiles[0].types[0];
    const h = clamp(aVal.ordering-bVal.ordering, -1,1)
    if(h!==0) return h
    return a.weapon.name.localeCompare(b.weapon.name);
}

export default weaponSorting;
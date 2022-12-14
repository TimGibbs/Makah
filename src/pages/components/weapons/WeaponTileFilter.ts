import compare from "../../../functions/CaseIndifferentStringCompare";
import Point from "../../../types/Point";
import weaponFilter from "./WeaponFilter";
import { WeaponTileProps } from "./weaponTIle/WeaponTile";

export const weaponTileFilter = (a:WeaponTileProps, str:string, pt:Point|undefined) : boolean => {
    return str.split(",").every(s=>{
        s=s.trim()
        let ret : boolean = false;
    
        if(weaponFilter(a.weapon,s, pt)) ret = true
        if(a.type && compare(a.type,s)) ret = true;
        if(a.faction && compare(a.faction,s)) ret = true;
        return ret;
    })
  }

  export default weaponTileFilter;
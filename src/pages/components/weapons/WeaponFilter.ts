import compare from "../../../functions/CaseIndifferentStringCompare";
import Weapon from "../../../types/Weapon";

export const weaponFilter = (a:Weapon, str:string) : boolean => {
    return str.split(",").every(s=>{
        s=s.trim()
        let ret : boolean = false;
    
        if(compare(a.name,s)) ret = true;
        if(a.notes && compare(a.notes,s)) ret = true;
        if(compare(a.source,s)) ret = true;
        if(compare(a.pt.toString(),s)) ret = true;
        a.profiles.forEach(p=>{
            if(p.name && compare(p.name,s)) ret = true;
            if(compare(p.attack.toString(),s)) ret = true;
            if(compare(p.dam.toString(),s)) ret = true;
            if(compare(p.ap.toString(),s)) ret = true;
            p.types.forEach(t=>{
                if(compare(t.name,s)) ret = true;
            })
            p.special.forEach(t=>{
                if(compare(t.name,s)) ret = true;
            })
        })
        return ret;
    })
}

export default weaponFilter;
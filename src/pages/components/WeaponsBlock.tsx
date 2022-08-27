import { hasProfiles, Weapon } from "../../types/Weapon"
import  GlossaryOverlay  from "./GlossaryOverlay"
import './WeaponsBlock.css'


export const WeaponBlock = (weapons : Weapon[]) => {
    var g = weapons.sort((a,b)=>{
        
        const aVal = hasProfiles(a) ? a.profiles[0].types[0] : a.types[0];
        const bVal = hasProfiles(b) ? b.profiles[0].types[0] : b.types[0];
        const h =  aVal.ordering-bVal.ordering
        if(h!==0) return h
        return a.name.localeCompare(b.name);
    })
    return (
        <table className="weaponsBlock">
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Attack</th>
                <th>Dam</th>
                <th>AP</th>
                <th>Special</th>
                <th>Points</th>
            </tr>
            {g.map(weapon=> weaponMap(weapon))}
        </table>
    )
}

export function weaponMap(weapon:Weapon){
    if(hasProfiles(weapon))
    {
        return <><tr>
            <td>{weapon.name}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td rowSpan={3}>{weapon.pt}</td>
        </tr>
        {weapon.profiles.map(o=>{
            return <tr>
            <td>🠺{o.name}</td>
            <td>{o.types.map(o=>GlossaryOverlay({ skill:o, item:<p className="skillName">{o.name}</p>}))}</td>
            <td>{o.attack}</td>
            <td>{o.dam}</td>
            <td>{o.ap}</td>
            <td>{o.special.map(o=>GlossaryOverlay({ skill:o, item:<p className="skillName">{o.name}</p>}))}</td>
        </tr>
        })}
        </>
    }
    else{
        return <tr>
            <td>{weapon.name}</td>
            <td>{weapon.types.map(o=>GlossaryOverlay({ skill:o, item:<p className="skillName">{o.name}</p>}))}</td>
            <td>{weapon.attack}</td>
            <td>{weapon.dam}</td>
            <td>{weapon.ap}</td>
            <td>{weapon.special.map(o=>GlossaryOverlay({ skill:o, item:<p className="skillName">{o.name}</p>}))}</td>
            <td>{weapon.pt}</td>
        </tr>
    }
}

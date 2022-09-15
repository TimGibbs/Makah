import { Container, Table } from "react-bootstrap"
import { getKey } from "../../../../functions/keys"
import GlossaryOverlay from "../../GlossaryOverlay"
import { WeaponTileProps } from "../weaponTIle/WeaponTile"
import { NoteIcons } from "../../Notes";
import Note from "../../../../types/Note";
import { Attacks, Damage, AP } from "../../../../data/GlossaryTerms";
import Weapon from "../../../../types/Weapon";
import React from "react";

export function weaponMap(weapon:Weapon, index:number, bold:boolean, addNote:(str: string) => Note, hasRestrictions:boolean){
    let name = weapon.name;
    if(weapon.notes) {
        const n  = addNote(weapon.notes);
        name = name +" " + n.icon
    }
    if(weapon.profiles.length>1)
    {
        return <React.Fragment key={getKey()} ><tr key={getKey()}   className={bold ? "bold" : ""} >
            <td>{name}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td rowSpan={3}>{weapon.pt}</td>
            <td rowSpan={3}>{weapon.source}</td>
            {hasRestrictions && <td rowSpan={3}>{weapon.restrictons}</td>}
        </tr>
        {weapon.profiles.map((o,i)=>{
            return <tr key={getKey()}  className={bold ? "bold" : ""}>
            <td>🠺{o.name}</td>
            <td>{o.types.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
            <td>{o.attack}</td>
            <td>{o.dam}</td>
            <td>{o.ap}</td>
            <td>{o.special.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
        </tr>
        })}
        </React.Fragment>
    }
    else{
        return <tr key={getKey()}  className={bold ? "bold" : ""}>
            <td>{name}</td>
            <td>{weapon.profiles[0].types.map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
            <td>{weapon.profiles[0].attack}</td>
            <td>{weapon.profiles[0].dam}</td>
            <td>{weapon.profiles[0].ap}</td>
            <td>{weapon.profiles[0].special.sort((a,b)=>a.name.localeCompare(b.name)).map((p,j)=>GlossaryOverlay({ skill:p, item:<p key={j} className="skillName">{p.name}</p>}))}</td>
            <td>{weapon.pt}</td>
            <td>{weapon.source}</td>
            {hasRestrictions && <td>{weapon.restrictons}</td>}
        </tr>
    }
}

export const WeaponTable = ({items, source}:{items:WeaponTileProps[], source:string}) => {
    const icons = [...NoteIcons]
    const noteMap : Note[] = []
    const addNote = (str :string) => { 
        let note = noteMap.find(o=>o.text === str)
        if(!note){
            const icon = icons.shift() ?? "";
            note = {icon:icon, text:str}
            noteMap.push(note)
        }
        return note}
    const hasRestrictions = items.some(o=> o.weapon.restrictons);
    return(
      <Container>
            <Table striped responsive key={getKey()} >
                <thead key={getKey()} >
                <tr key={getKey()} >
                    <th>Name</th>
                    <th>Type</th>
                    <GlossaryOverlay skill={Attacks} item={<th>Atk</th>}/>
                    <GlossaryOverlay skill={Damage} item={<th>Dam</th>}/>
                    <GlossaryOverlay skill={AP} item={<th>AP</th>}/>
                    <th>Special</th>
                    <th>Points</th>
                    <th>Source</th>
                    {hasRestrictions && <th>Restrictions</th>}
                </tr>
                </thead>
                <tbody>
                    {items.map((x, index)=> weaponMap(x.weapon, index, x.weapon.source === source, addNote, hasRestrictions))}
                </tbody>
            </Table>
            <ul>
                {noteMap.map(o=><li key={getKey()} >{`${o.icon} ${o.text}`}</li>)}
            </ul>
      </Container>)
  }
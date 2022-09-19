import './WeaponsBlock.css'
import { useState} from "react";
import { WeaponTileProps } from "../weaponTIle/WeaponTile";
import useScreenSize from '../../../../hooks/UseScreenSize'
import ScreenSize from '../../../../types/ScreenSize'
import weaponSorting from "../WeaponSorting";
import Selector from "./WeaponsSelector";
import WeaponTileGrid from "../weaponTIle/WeaponTileGrid";
import { WeaponTable } from "../weaponTable/WeaponTable";
import weaponTileFilter from '../WeaponTileFilter';
import Point, { asPoint } from '../../../../types/Point';
import onlyUnique from '../../../../functions/OnlyUnique';


export const WeaponBlock = ({items, showFilter, showToggles, source}:{items:WeaponTileProps[], showFilter:boolean, showToggles:boolean, source:string}) => {
        const size = useScreenSize();
        const [strFilter, setStrFilter] = useState("")
        const [ptFilter, setPtFilter] = useState<Point|undefined>(undefined);
        const [sources, setSources] = useState<{ [key: string] : boolean }>({})
        const filtered = items.filter(o=>weaponTileFilter(o,strFilter, ptFilter)).filter(o=>sources[o.weapon.source] === undefined || sources[o.weapon.source] ).sort(weaponSorting)
        const setFn = (source:string) : void =>{ setSources({...sources, [source]:!sources[source]})}
        return (<div className="weaponsBlock">
            {showFilter && <span>
                <input placeholder="Filter" onChange={e=>setStrFilter(e.target.value)}/>
                <input list="points" onChange={e=> {setPtFilter(asPoint(e.target.value))}}/>
                <datalist id="points">
                    {items.map(o=>o.weapon.pt).filter(onlyUnique).sort((a,b)=> parseInt(a.toString())- parseInt(b.toString())).map(o=><option value={o} />)}
                </datalist>
                </span> }
            {showToggles && <Selector weapons={items.map(o=>o.weapon)} state={sources} setFn={setFn} />}
            {size < ScreenSize.lg &&<WeaponTileGrid items={filtered} />}
            {size >= ScreenSize.lg &&<WeaponTable items={filtered} source={source}/>}
            </div>)
      
}

export default WeaponBlock



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

export const WeaponBlock = ({items, showFilter, showToggles, source}:{items:WeaponTileProps[], showFilter:boolean, showToggles:boolean, source:string}) => {
        const size = useScreenSize();
        const [query, setFilter] = useState("")
        const [sources, setSources] = useState<{ [key: string] : boolean }>({})
        const filtered = items.filter(o=>weaponTileFilter(o,query)).filter(o=>sources[o.weapon.source] === undefined || sources[o.weapon.source] ).sort(weaponSorting)
        const setFn = (source:string) : void =>{ setSources({...sources, [source]:!sources[source]})}
        return (<div className="weaponsBlock">
            {showFilter && <input placeholder="Filter" onChange={e=>setFilter(e.target.value)}/>}
            {showToggles && <Selector weapons={items.map(o=>o.weapon)} state={sources} setFn={setFn} />}
            {size < ScreenSize.lg &&<WeaponTileGrid items={filtered} />}
            {size >= ScreenSize.lg &&<WeaponTable items={filtered} source={source}/>}
            </div>)
      
}

export default WeaponBlock



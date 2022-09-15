import { FormEvent } from "react"
import { Form } from "react-bootstrap"
import { getKey } from "../../../../functions/keys"
import onlyUnique from "../../../../functions/OnlyUnique"
import Weapon from "../../../../types/Weapon"

const Selector = ({weapons, state, setFn}:{weapons:Weapon[], state:{ [key: string] : boolean }, setFn(source:string):void}) => {
    return (<Form>
        {weapons.map(o=>o.source).filter(onlyUnique).map(o=><Form.Check key={getKey()}
            type="switch"
            id={`switch-${o}`}
            label={o}
            inline
            checked={state[o]=== undefined || state[o]}
            onChange={(e: FormEvent<HTMLInputElement>) => { setFn(o) }}
        />)}
    
      </Form>)
}

export default Selector;
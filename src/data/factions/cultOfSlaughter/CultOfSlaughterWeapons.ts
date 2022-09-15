import Weapon from "../../../types/Weapon";
import { Assault, Combat } from "../../weapons/WeaponTypes";
import { Reckless, Vicious, Torrent, Brutal } from './../../weapons/WeaponSpecialRules';

const source: string = "Cult of Slaughter";

export const HatredsRoar: Weapon = {
    name: "Hatred’s roar",
    profiles: [
      {
        types: [Assault],
        attack: 4,
        dam: 2,
        ap: -1,
        special: [Torrent],
      },
    ],
    pt: 4,
    source: source,
  };

  export const GoreFangs: Weapon = {
    name: "Gore fangs",
    profiles: [
      {
        types: [Combat],
        attack: 6,
        dam: 2,
        ap: -1,
        special: [Reckless, Vicious],
      },
    ],
    pt: 3,
    source: source,
  };

  export const GladiatorialWeapons: Weapon = {
    name: "Gladiatorial weapons",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 3,
        ap: 0,
        special: [Brutal(1)],
      },
    ],
    pt: 1,
    source: source,
  };

  export const Chainaxe: Weapon = {
    name: "Chainaxe",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 4,
        ap: 0,
        special: [Vicious],
      },
    ],
    pt: 2,
    source: source,
  };
  
  export const GreatChainWeapon: Weapon = {
    name: "Great Chain Weapon",
    profiles: [ 
      {
        types: [Combat],
        attack: 4,
        dam: 4,
        ap: -1,
        special: [Vicious, Brutal(1)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const Chainfist: Weapon = {
    name: "Chainfist",
    profiles: [ 
      {
        types: [Combat],
        attack: 4,
        dam: 4,
        ap: -2,
        special: [Brutal(2)],
      },
    ],
    pt: 9,
    source: source,
  };

  export const Hellblade: Weapon = {
    name: "Hellblade",
    profiles: [ 
      {
        types: [Combat],
        attack: 4,
        dam: 3,
        ap: -1,
        special: [Brutal(1)],
      },
    ],
    pt: 4,
    source: source,
  };

  
  const CultOfSlaughterWeapons : Weapon[] =
  [
    HatredsRoar,
    GoreFangs,
    GladiatorialWeapons, 
    Chainaxe,
    GreatChainWeapon, 
    Chainfist, 
    Hellblade
  ]

  export default CultOfSlaughterWeapons;

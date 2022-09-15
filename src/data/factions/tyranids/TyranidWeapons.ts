import Weapon from "../../../types/Weapon";
import { Pistol, Assault, Combat } from "../../weapons/WeaponTypes";
import { Blast, Range, Reckless, Rending } from "../../weapons/WeaponSpecialRules";
const source : string = "Tyranid"

export const SpinefistsT: Weapon = {
    name: "Spinefists",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 2,
        ap: 0,
        special: [Range(6)],
      },
    ],
    pt: 0,
    source: source,
    restrictons:"Termagant Only"
  };

  export const Fleshborer: Weapon = {
    name: "Fleshborer",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 2,
        ap: 0,
        special: [],
      },
    ],
    pt: 0,
    source: source,
    restrictons:"Termagant Only"
  };

  
  export const Devourer: Weapon = {
    name: "Devourer",
    profiles: [
      {
        types: [Assault],
        attack: 2,
        dam: 3,
        ap: -1,
        special: [],
      },
    ],
    pt: 1,
    source: source,
    restrictons:"Termagant Only"
  };

  export const Claws: Weapon = {
    name: "Claws",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 2,
        ap: 0,
        special: [],
      },
    ],
    pt: 0,
    source: source,
    restrictons:"Termagant Only"
  };

  export const Talons: Weapon = {
    name: "Talons",
    profiles: [
      {
        types: [Combat],
        attack: 6,
        dam: 2,
        ap: -1,
        special: [Reckless],
      },
    ],
    pt: 0,
    source: source,
    restrictons:"Hormagaunt Only"
  };

  export const SpinefistsW: Weapon = {
    name: "Spinefists",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 3,
        ap: -1,
        special: [Range(6)],
      },
    ],
    pt: 1,
    source: source,
    restrictons:"Warrior Only"
  };

  export const BarbedStrangler: Weapon = {
    name: "Barbed strangler",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 4,
        ap: 0,
        special: [Blast(2)],
      },
    ],
    pt: 3,
    source: source,
    restrictons:"Warrior Only"
  };

  export const Deathspitter: Weapon = {
    name: "Deathspitter",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [],
      },
    ],
    pt: 5,
    source: source,
    restrictons:"Warrior Only"
  };

  export const VenomCannon: Weapon = {
    name: "Venom Cannon",
    profiles: [
      {
        types: [Assault],
        attack: 2,
        dam: 5,
        ap: -1,
        special: [Blast(1.5)],
      },
    ],
    pt: 8,
    source: source,
    restrictons:"Warrior Only"
  };

  export const Bonesword: Weapon = {
    name: "Bonesword",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 4,
        ap: -1,
        special: [],
      },
    ],
    pt: 5,
    source: source,
    restrictons:"Warrior Only"
  };

  export const RendingClaws: Weapon = {
    name: "Rending claws",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 4,
        ap: -2,
        special: [Rending],
      },
    ],
    pt: 8,
    source: source,
    restrictons:"Warrior Only"
  };

  export const ScythingTalon: Weapon = {
    name: "Scything talon",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 3,
        ap: -1,
        special: [],
      },
    ],
    pt: 1,
    source: source,
    restrictons:"Warrior Only"
  };

  export const FrontClaws: Weapon = {
    name: "Front claws",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 2,
        ap: 0,
        special: [],
      },
    ],
    pt: 0,
    source: source,
    restrictons:"Genestealer Only"
  };

  export const GenestealerClaws: Weapon = {
    name: "Genestealer claws",
    profiles: [
      {
        types: [Combat],
        attack: 6,
        dam: 3,
        ap: -1,
        special: [Reckless],
      },
    ],
    pt: 5,
    source: source,
    restrictons:"Genestealer Only"
  };

  export const PurestrainClaws: Weapon = {
    name: "Purestrain claws",
    profiles: [
      {
        types: [Combat],
        attack: 6,
        dam: 3,
        ap: -1,
        special: [Reckless, Rending],
      },
    ],
    pt: 7,
    source: source,
    restrictons:"Genestealer Only"
  };

  export const ClawsAndTalons: Weapon = {
    name: "Claws and talons",
    profiles: [
      {
        types: [Combat],
        attack: 6,
        dam: 4,
        ap: -2,
        special: [],
      },
    ],
    pt: 10,
    source: source,
    restrictons:"Lictor Only"
  };

  export const FeebleForelimbs: Weapon = {
    name: "Feeble forelimbs",
    profiles: [
      {
        types: [Combat],
        attack: 3,
        dam: 3,
        ap: 0,
        special: [],
      },
    ],
    pt: 0,
    source: source,
    restrictons:"Zoanthrope Only"
  };

  const TyranidWeapons : Weapon[] = 
  [
    SpinefistsT,
    Fleshborer,
    Devourer,
    Claws,
    Talons,
    SpinefistsW,
    BarbedStrangler,
    Deathspitter,
    VenomCannon,
    Bonesword,
    RendingClaws,
    ScythingTalon,
    FrontClaws,
    GenestealerClaws,
    PurestrainClaws,
    ClawsAndTalons,
    FeebleForelimbs,
  ]

  export default TyranidWeapons;
import Weapon from "../../../types/Weapon";
import { IgnoresCover, Range, Aim, Torrent, PsykerOnly } from "../../weapons/WeaponSpecialRules";
import { Assault, Heavy, Combat, Pistol, Rifle } from "../../weapons/WeaponTypes";

const source: string = "Cult of Secrets";

export const WarpflamePistol : Weapon = {
    name: "Warpflame Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 4,
        dam: 2,
        ap: -1,
        special: [Torrent, IgnoresCover],
      },
    ],
    pt: 4,
    source: source,
  };

  export const Warpflamer : Weapon = {
    name: "Warpflamer",
    profiles: [
      {
        types: [Assault],
        attack: 5,
        dam: 2,
        ap: -1,
        special: [Torrent, IgnoresCover],
      },
    ],
    pt: 6,
    source: source,
  };

  export const InfernoBoltPistol : Weapon = {
    name: "Inferno Bolt Pistol",
    profiles: [
      {
        types: [Pistol],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [],
      },
    ],
    pt: 2,
    source: source,
  };

  export const InfernoBoltgun : Weapon = {
    name: "Inferno Boltgun",
    profiles: [
      {
        types: [Rifle],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [],
      },
    ],
    pt: 3,
    source: source,
  };

  export const Fatebow : Weapon = {
    name: "Fatebow",
    profiles: [
      {
        types: [Heavy],
        attack: 1,
        dam: 5,
        ap: -2,
        special: [Aim],
      },
    ],
    pt: 3,
    source: source,
  };
  export const CoruscatingFlames : Weapon = {
    name: "Coruscating flames",
    profiles: [
      {
        types: [Assault],
        attack: 4,
        dam: 4,
        ap: 0,
        special: [Range(8)],
      },
    ],
    pt: 0,
    source: source,
  };

  export const SoulreaperCannon : Weapon = {
    name: "Soulreaper Cannon",
    profiles: [
      {
        types: [Heavy],
        attack: 5,
        dam: 2,
        ap: -2,
        special: [],
      },
    ],
    pt: 6,
    source: source,
  };

  export const DivingSpear : Weapon = {
    name: "Diving Spear",
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
  };
  
  export const ForceWeapon : Weapon = {
    name: "Force Weapon",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: "D3+2",
        ap: -2,
        special: [PsykerOnly],
      },
    ],
    pt: 8,
    source: source,
  };
  const CultOfSecretsWeapons : Weapon[] =
  [
    WarpflamePistol,
    Warpflamer,
    InfernoBoltPistol,
    InfernoBoltgun,
    Fatebow,
    CoruscatingFlames,
    SoulreaperCannon,
    DivingSpear,
    ForceWeapon
  ]

  export default CultOfSecretsWeapons;

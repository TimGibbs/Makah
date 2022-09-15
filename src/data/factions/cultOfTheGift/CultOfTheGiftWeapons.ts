import Weapon from "../../../types/Weapon";
import { Inaccurate, IgnoresCover, Poison, Rot, Torrent, Range, Blast } from "../../weapons/WeaponSpecialRules";
import { Assault, Heavy, Combat, Grenade } from "../../weapons/WeaponTypes";

const source: string = "Cult of the Gift";

export const BlightLauncher: Weapon = {
    name: "Blight Launcher",
    profiles: [
      {
        types: [Assault],
        attack: 3,
        dam: 4,
        ap: -1,
        special: [Rot(2)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const PlagueBelcher: Weapon = {
    name: "Plague Belcher",
    profiles: [
      {
        types: [Assault],
        attack: 5,
        dam: 2,
        ap: 0,
        special: [Torrent, IgnoresCover, Poison(2)],
      },
    ],
    pt: 6,
    source: source,
  };

  export const PlagueSpewer: Weapon = {
    name: "Plague Spewer",
    profiles: [
      {
        types: [Heavy],
        attack: 5,
        dam: 2,
        ap: -1,
        special: [Torrent, IgnoresCover, Poison(2)],
      },
    ],
    pt: 8,
    source: source,
  };

  export const DiseasedClawsAndWeapons: Weapon = {
    name: "Diseased claws and weapons",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 2,
        ap: 0,
        special: [Rot(1)],
      },
    ],
    pt: 1,
    source: source,
  };

  export const CorruptingWeapon: Weapon = {
    name: "Corrupting weapon",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 4,
        ap: -1,
        special: [Rot(1)],
      },
    ],
    pt: 5,
    source: source,
  };

  export const GreatCorruptingWeapon: Weapon = {
    name: "Great corrupting weapon",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 4,
        ap: -2,
        special: [Inaccurate,Rot(2)],
      },
    ],
    pt: 6,
    source: source,
  };

  export const PlagueKnife: Weapon = {
    name: "Plague Knife",
    profiles: [
      {
        types: [Combat],
        attack: 4,
        dam: 3,
        ap: 0,
        special: [Rot(1), Poison(2)],
      },
    ],
    pt: 2,
    source: source,
  };

  export const BlightGrenade: Weapon = {
    name: "Blight Grenade",
    profiles: [
      {
        types: [Grenade],
        attack: 4,
        dam: 2,
        ap: 0,
        special: [Range(4), Blast(2), Rot(1), Poison(2)],
      },
    ],
    pt: 2,
    source: source,
  };

  const CultOfTheGiftWeapons :Weapon[] =
  [
    BlightLauncher,
    PlagueBelcher,
    PlagueSpewer,
    DiseasedClawsAndWeapons,
    CorruptingWeapon,
    GreatCorruptingWeapon,
    PlagueKnife,
    BlightGrenade
  ]

  export default CultOfTheGiftWeapons;
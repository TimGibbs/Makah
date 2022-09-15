import PsychicPower from "../../../types/PsychicPower";

export const Onslaught : PsychicPower =
{
    name:"Onslaught",
    effect:"Until the end of the Turn, friendly Operatives visible to the Zoanthrope don’t suffer the -1 to hit when Shooting at the end of a Dash action."
}

export const Paroxysm : PsychicPower =
{
    name:"Paroxysm",
    effect:"Give an enemy Operative an Evade token."
}

export const PsychicScream : PsychicPower =
{
    name:"Psychic scream",
    effect:"Pick a visible enemy Operative. Both players roll a d6, psykers gain +1. The Operative with the lowest score suffer Damage equal to the difference."
}

export const WarpBlast : PsychicPower =
{
    name:"Warp blast",
    effect:"Pick a visible enemy operative. They suffer d3+1 damage with no save or Evade allowed. Other Operatives friendly to the target within 1\" suffer 1 damage with no save or Evade allowed."
}

const TyranidPsychicPowers : PsychicPower[] =
[
    Onslaught,
    Paroxysm,
    PsychicScream,
    WarpBlast
]

export default TyranidPsychicPowers;
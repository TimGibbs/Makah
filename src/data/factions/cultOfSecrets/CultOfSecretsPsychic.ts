import PsychicPower from "../../../types/PsychicPower";

export const Doombolt : PsychicPower =
{
    name:"Doombolt",
    effect:"Pick a visible enemy Operative. They suffer d6 Damage, with no save allowed."
}

export const GlamourOfTzeentch : PsychicPower =
{
    name:"Glamour of Tzeentch",
    effect:"Swap the position of two visible friendly Operatives."
}

export const GazeOfTheInfinite : PsychicPower =
{
    name:"Gaze of the Infinite",
    effect:" Pick three visible enemy Operatives, their Player must turn their initiative cards face up. This can’t be used in the same turn as the Tzeentch faction ability."
}

export const TwistOfFate : PsychicPower =
{
    name:"Twist of Fate",
    effect:"Swap the enemy’s last initiative card with the one that is next to activate. Deal both Operatives and yourself 1 damage."
}

export const ComicReversal : PsychicPower =
{
    name:"Comic reversal",
    effect:"Pick one visible Blue Horror, replace it with the Pink Horror who was replaced by it. The Pink Horror has d3+1 wounds."
}

const CultOfSecretsPsychicPowers : PsychicPower[] =
[
    Doombolt,
    GlamourOfTzeentch,
    GazeOfTheInfinite,
    TwistOfFate,
    ComicReversal
]

export default CultOfSecretsPsychicPowers;
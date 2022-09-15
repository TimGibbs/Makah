import PsychicPower from "../../../types/PsychicPower";

export const PlagueWind : PsychicPower =
{
    name:"Plague wind",
    effect:"Pick a visible enemy operative and roll 7 dice. For each 6+, that Operative takes 2 damage that cannot be saved. You regain wounds equal to the damage done."
}

export const GiftOfContagion : PsychicPower =
{
    name:"Gift of contagion",
    effect:"Pick a visible enemy operative and place a marker next to them. For the rest of this turn the Damage of their weapons is reduced by 1 and their Movement characteristic is reduced to 3\"."
}

const CultOfTheGiftPsychicPowers : PsychicPower[] =
[
    PlagueWind,
    GiftOfContagion
]

export default CultOfTheGiftPsychicPowers;
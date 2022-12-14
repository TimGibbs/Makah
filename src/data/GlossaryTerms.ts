import GlossaryTerm from "../types/GlossaryTerm";

export const Limited : GlossaryTerm ={
    name:"Limited",
    effect:"Limited Operatives cannot carry out Mission specific Action but do contest control of objectives."
}

export const Evade : GlossaryTerm ={
    name:"Evade",
    effect:"Once and operative becomes the target of a Shooting attack they may choose to Evade, if they do so place an Evade token next to them. If an Operative has an Evade token when hit by a Shooting attack, they can roll a dice for each Hit. On a 5+, the Hit is cancelled. An Operative with an Evade token cannot Fight Back. If an operative has a Evade token, the next time they activate they lose one action and discard it. Evade tokens are not cleared automatically between Turns. You can’t have more than one Evade token per Operative."
}

export const Dash : GlossaryTerm ={
    name:"Dash",
    effect:"Action - 3\" move. This cannot be used to move into or out of Engagement range. It can be used before or after a Movement action."
}

export const Engaged : GlossaryTerm ={
    name:"Engaged",
    effect:"An operative is Engaged with all enemies within 1\"."
}

export const Attacks : GlossaryTerm ={
    name:"Attacks",
    effect:"The number of dice rolled when Shooting or Fighting."
}

export const Damage : GlossaryTerm ={
    name:"Damage",
    effect:"The damage done by each unsaved hit."
}

export const AP : GlossaryTerm ={
    name:"Armour Penetration",
    effect:"Reduce the target’s Save by this amount."
}

export const GlossaryTerms : GlossaryTerm[] =
[
    Limited, Evade, Dash, Engaged, Attacks,Damage,AP
]

export default GlossaryTerms;
import OperativeBase from "../../../types/OperativeBase";
import { Daemonic } from "../../CommonNotes";
import { Split } from "./CultOfSecretsEquipment";

export const TzeenchCultist : OperativeBase =
{
    type:"Tzeench Cultist",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:6,
    pt:9,
}

export const Tzaangor : OperativeBase =
{
    type:"Tzaangor",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:8,
    sv:5,
    pt:12,
}

export const RubricMarine : OperativeBase =
{
    type:"Rubric Marine",
    mv:6,
    ws:3,
    bs:3,
    act:2,
    wnd:12,
    sv:3,
    pt:33,
}

export const AspiringSorcerer : OperativeBase =
{
    type:"Aspiring Sorcerer",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:12,
    sv:3,
    pt:50,
    isPsyker:true
}

export const PinkHorror : OperativeBase =
{
    type:"Pink Horror",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:6,
    sv:6,
    pt:12,
    notes:Daemonic,
    equipment:[Split]
}


export const BlueHorror : OperativeBase =
{
    type:"Blue Horror",
    mv:6,
    ws:5,
    bs:5,
    act:2,
    wnd:4,
    sv:6,
    pt:"-",
    notes:Daemonic,
    equipment:[Split]
}

const CultOfSecretsOperatives : OperativeBase[] =
[
    TzeenchCultist,
    Tzaangor,
    RubricMarine,
    AspiringSorcerer,
    PinkHorror,
    BlueHorror,
]

export default CultOfSecretsOperatives;

import OperativeBase from "../../../types/OperativeBase";
import { Daemonic, Limited } from "../../CommonNotes";

export const NurgleCultist : OperativeBase =
{
    type:"Nurgle Cultist",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:7,
    sv:6,
    pt:10,
}

export const Poxwalker : OperativeBase =
{
    type:"Poxwalker",
    mv:5,
    ws:4,
    bs:7,
    act:2,
    wnd:10,
    sv:6,
    pt:10,
    notes:Limited
}

export const PlagueMarine : OperativeBase =
{
    type:"Plague Marine",
    mv:5,
    ws:3,
    bs:3,
    act:3,
    wnd:14,
    sv:3,
    pt:43,
}

export const Nurglings : OperativeBase =
{
    type:"Nurglings",
    mv:5,
    ws:5,
    bs:7,
    act:2,
    wnd:8,
    sv:6,
    pt:10,
    notes:Daemonic
}

export const PlagueBearer : OperativeBase =
{
    type:"Plague Bearer",
    mv:5,
    ws:4,
    bs:7,
    act:2,
    wnd:12,
    sv:6,
    pt:15,
    notes:Daemonic
}

const CultOfTheGiftOperatives :OperativeBase[] =
[
    NurgleCultist,
    Poxwalker,
    PlagueMarine,
    Nurglings,
    PlagueBearer
]

export default CultOfTheGiftOperatives;
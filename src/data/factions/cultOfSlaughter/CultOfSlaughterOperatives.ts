import OperativeBase from "../../../types/OperativeBase";
import { Daemonic, Limited } from "../../CommonNotes";

export const KhorneCultist : OperativeBase =
{
    type:"Khorne Cultist",
    mv:6,
    ws:3,
    bs:4,
    act:2,
    wnd:6,
    sv:6,
    pt:12,
}

export const WarriorOfKhorne : OperativeBase =
{
    type:"Warrior of Khorne",
    mv:6,
    ws:3,
    bs:4,
    act:2,
    wnd:8,
    sv:4,
    pt:17,
}

export const Berserker : OperativeBase =
{
    type:"Berserker",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:12,
    sv:3,
    pt:42,
}

export const FleshHound : OperativeBase =
{
    type:"Flesh Hound",
    mv:8,
    ws:3,
    bs:7,
    act:2,
    wnd:6,
    sv:6,
    pt:11,
    notes:`${Limited},${Daemonic}`
}

export const Bloodletter : OperativeBase =
{
    type:"Bloodletter",
    mv:6,
    ws:3,
    bs:7,
    act:2,
    wnd:8,
    sv:6,
    pt:17,
    notes:Daemonic
}


const CultOfSlaughterOperatives : OperativeBase[] =
[
    KhorneCultist,
    WarriorOfKhorne,
    Berserker,
    FleshHound,
    Bloodletter
]

export default CultOfSlaughterOperatives;
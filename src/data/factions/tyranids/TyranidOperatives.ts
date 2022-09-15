import OperativeBase from "../../../types/OperativeBase";
import { Limited } from "../../CommonNotes";

export const Termagant : OperativeBase =
{
    type:"Termagant",
    mv:6,
    ws:4,
    bs:4,
    act:2,
    wnd:5,
    sv:5,
    pt:9,
}

export const Hormaguant : OperativeBase =
{
    type:"Hormaguant",
    mv:8,
    ws:3,
    bs:4,
    act:2,
    wnd:5,
    sv:5,
    pt:13,
    notes:Limited
}

export const Warrior : OperativeBase =
{
    type:"Warrior",
    mv:6,
    ws:3,
    bs:3,
    act:3,
    wnd:14,
    sv:4,
    pt:40,
}

export const Lictor : OperativeBase =
{
    type:"Lictor",
    mv:8,
    ws:2,
    bs:6,
    act:3,
    wnd:12,
    sv:5,
    pt:45,
}

export const Genestealer : OperativeBase =
{
    type:"Genestealer",
    mv:7,
    ws:2,
    bs:7,
    act:3,
    wnd:8,
    sv:4,
    pt:30,
}

export const Zoanthrope : OperativeBase =
{
    type:"Zoanthrope",
    mv:6,
    ws:5,
    bs:3,
    act:2,
    wnd:8,
    sv:4,
    pt:32,
    isPsyker:true
}

const TyranidOperatives : OperativeBase[] =
[
    Termagant,
    Hormaguant,
    Warrior,
    Lictor,
    Genestealer,
    Zoanthrope
]

export default TyranidOperatives;
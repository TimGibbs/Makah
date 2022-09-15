import Faction from "../../types/Faction";
import { Astartes } from "./astartes/Astartes";
import { Craftworld } from "./craftworld/Craftworld";
import { Deldar } from "./deldar/Deldar";
import { GenestealerCults } from "./genestealerCults/GenestealerCults";
import { ImperialGuard } from "./imperialGuard/ImperialGuard";
import { Inquisition } from "./inquisition/Inquisition";
import { Mechanicus } from "./mechanicus/Mechanicus";
import { Necrons } from "./necrons/Necrons";
import { Orks } from "./orks/Orks";
import { SistersOfBattle } from "./sisters/Sisters";
import { Tau } from "./tau/Tau";
import { ChaosCult } from "./chaosCult/ChaosCult";
import { CultOfExcess } from "./cultOfExcess/CultOfExcess";
import { Tyranids } from "./tyranids/Tyranid";
import { CultOfTheGift } from "./cultOfTheGift/CultOfTheGift";
import { CultOfSlaughter } from "./cultOfSlaughter/CultOfSlaughter";

export const Factions : Faction[] =
[
    Inquisition,
    Astartes,
    ImperialGuard,
    SistersOfBattle,
    Mechanicus,
    Orks,
    Craftworld,
    Deldar,
    Tau,
    Necrons, 
    GenestealerCults,
    Tyranids,
    ChaosCult,
    CultOfExcess,
    CultOfTheGift,
    CultOfSlaughter
]

export default Factions;
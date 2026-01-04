import { Tag } from "./tag";

export type ClimbType = "ROUTE" | "BOULDER";
export type ClimbState = "WORKING" | "DONE";

export interface Climb {
    id: string;
    name: string;
    type: ClimbType;
    difficulty: string;
    state: ClimbState;
    tags: Tag[];
}

export function createClimb(
    name: string,
    type: ClimbType,
    difficulty: string,
    state: ClimbState,
    tags: Tag[]
): Climb {
    return {id: crypto.randomUUID(), name, type, difficulty, state, tags};
}

export function toogleClimbState(climb: Climb) {
    climb.state = (climb.state === "WORKING") ? "DONE" : "WORKING";
}
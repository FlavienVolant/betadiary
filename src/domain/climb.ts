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

export function otherClimbState(climb_state: ClimbState): ClimbState {
    return (climb_state === "WORKING") ? "DONE" : "WORKING";
}
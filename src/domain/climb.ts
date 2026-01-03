export type ClimbType = "ROUTE" | "BOULDER";
export type ClimbState = "WORKING" | "DONE";

export interface Climb {
    id: string;
    name: string;
    type: ClimbType;
    difficulty: string;
    state: ClimbState;
}

export function createClimb(
    name: string,
    type: ClimbType,
    difficulty: string,
    state: ClimbState
): Climb {
    return {id: crypto.randomUUID(), name, type, difficulty, state} as Climb
}

export function otherClimbState(state: ClimbState): ClimbState {
    return (state === "WORKING") ? "DONE" : "WORKING";
}
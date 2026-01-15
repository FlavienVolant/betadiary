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
    date_working: Date;
    date_done: Date | undefined;
}

export function createClimb(
    name: string,
    type: ClimbType,
    difficulty: string,
    state: ClimbState,
    tags: Tag[],
    date_working: Date,
    date_done: Date | undefined
): Climb {
    return {id: crypto.randomUUID(), name, type, difficulty, state, tags, date_working, date_done};
}

export function otherClimbState(climb_state: ClimbState): ClimbState {
    return (climb_state === "WORKING") ? "DONE" : "WORKING";
}

export function ClimbFromJson(json: any): Climb {
    return {
        id: json.id,
        name: json.name,
        type: json.type,
        difficulty: json.difficulty,
        state: json.state,
        tags:json.tags,
        date_working: json.date_working,
        date_done: json.date_done
    };
}
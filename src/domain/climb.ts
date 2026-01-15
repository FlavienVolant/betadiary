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
    start_working: Date;
    send_date: Date | undefined;
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
    return {id: crypto.randomUUID(), name, type, difficulty, state, tags, start_working: date_working, send_date: date_done};
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
        start_working: json.date_working,
        send_date: json.date_done
    };
}
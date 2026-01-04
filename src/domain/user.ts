import { Climb, otherClimbState } from "./climb";

export class User {
    private _id: string;
    private _username: string;
    private _climbs: Climb[];

    constructor(id: string, username: string, climbs: Climb[]) {
        this._id = id;
        this._username = username;
        this._climbs = climbs;
    }

    addClimb(climb: Climb) {
        this._climbs.push(climb);
    }

    toogleClimbState(climb_id: string) {
        this._climbs = this._climbs.map((c: Climb) => {
            if(c.id === climb_id)
                return { ...c, state: otherClimbState(c.state) };
            return c;                
        });
    }

    get id(): string {
        return this._id;
    }

    get username(): string {
        return this._username;
    }

    get climbs(): Climb[] {
        return this._climbs;
    }
}


export function createUser(): User {
    return new User(crypto.randomUUID(), "Flavien", []);
}

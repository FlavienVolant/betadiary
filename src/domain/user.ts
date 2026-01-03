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

    toggleClimbState(climb: Climb) {
        this._climbs
            .filter((_climb:Climb) => _climb.id === climb.id)
            .forEach((_climb: Climb) => {_climb.state = otherClimbState(_climb.state)})
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

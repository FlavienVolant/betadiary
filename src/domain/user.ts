import { Climb, ClimbFromJson, otherClimbState } from "./climb";

export class User {
    private id: string;
    private username: string;
    private climbs: Climb[];

    constructor(id: string, username: string, climbs: Climb[]) {
        this.id = id;
        this.username = username;
        this.climbs = climbs;
    }

    static fromUser(user: User): User {
        return new User(user.id, user.username, user.climbs);
    }

    static fromJSON(json: any): User {
        return new User(json.id, json.username, json.climbs.map((c: any) => ClimbFromJson(c)))
    }

    toJSON() {
        return {
            id: this.id,
            username: this.username,
            climbs: this.climbs
        };
    }

    addClimb(climb: Climb) {
        this.climbs.push(climb);
    }

    toggleClimbState(climb_id: string) {
        this.climbs = this.climbs.map((c: Climb) => {
            if(c.id === climb_id)
                return { ...c, state: otherClimbState(c.state) };
            return c;                
        });
    }
}


export function createUser(): User {
    return new User(crypto.randomUUID(), "Flavien", []);
}

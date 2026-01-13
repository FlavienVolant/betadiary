import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Climb } from "../domain/climb";
import { createUser, User } from "../domain/user";
import { loadUser, saveUser } from "../storage/userStorage";

type UserContextType = {
    user: User;
    onAddClimb: (climb: Climb) => void;
    toggleClimbState: (climbId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

type Props = { children: ReactNode };

export const UserProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User>(createUser());

    useEffect(() => {
        loadUser().then(stored => {
            if (stored) setUser(stored);
        });
    }, []);

    useEffect(() => {
        saveUser(user);
    }, [user]);

	const onAddClimb = (climb: Climb) => {
		setUser((prev: User) => {
			prev.addClimb(climb);
			return User.fromUser(prev);
		});
	};

	const toggleClimbState = (climbId: string)  => {
		setUser((prev: User) => {
			prev.toggleClimbState(climbId);
			return User.fromUser(prev);
		});
	};

    return (
        <UserContext.Provider value={{ user, onAddClimb, toggleClimbState}} >
            {children}
        </UserContext.Provider>
    );
};
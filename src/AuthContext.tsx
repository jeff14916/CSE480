import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";
import { getCurrentUser } from "aws-amplify/auth";

interface AuthContextType {
	isAuthenticated: boolean;
	setAuthStatus: (status: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
	isAuthenticated: false,
	setAuthStatus: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		const checkAuthState = async () => {
			try {
				await getCurrentUser();
				setIsAuthenticated(true);
			} catch {
				setIsAuthenticated(false);
			}
		};
		checkAuthState();
	}, []);

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, setAuthStatus: setIsAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => useContext(AuthContext);

import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
Amplify.configure(config);

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [pwd, setPassword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const { isAuthenticated, setAuthStatus } = useAuth();
	const queryParams = new URLSearchParams(location.search);
	const returnURL = queryParams.get("returnURL");
	useEffect(() => {
		if (isAuthenticated) {
			alert("Already logged In!");
			navigate(returnURL || "/");
		}
	}, [isAuthenticated, navigate, returnURL]);

	const Login = async () => {
		const username = email;
		const password = pwd;
		try {
			await signIn({
				username,
				password,
			});
			setAuthStatus(true);
			alert("Log in Success!");
			navigate(returnURL || "/");
		} catch (error) {}
	};

	return (
		<div className="login-container">
			<h1>Login</h1>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor="password">Password:</label>
			<input
				type="password"
				id="password"
				name="password"
				value={pwd}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={Login}>Sign In</button>
		</div>
	);
};

export default LoginPage;

import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { signUp } from "aws-amplify/auth";
import { confirmSignUp } from "aws-amplify/auth";
import { autoSignIn } from "aws-amplify/auth";
import "@aws-amplify/ui-react/styles.css";
import config from "../amplifyconfiguration.json";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { sign } from "crypto";
import { isElementAccessExpression } from "typescript";
Amplify.configure(config);

const SignUpPage = () => {
	const [email, setEmail] = useState("");
	const [pwd, setPassword] = useState("");
	const [pwd2, setPassword2] = useState("");
	const [nick, setNickname] = useState("");
	const [vcode, setVcode] = useState("");
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
	const Signup = async () => {
		const username = email;
		if (pwd !== pwd2) {
			alert("Password is not same!");
			return;
		}
		const password = pwd;
		let nickname = nick;
		if (nick.length < 3 || nick.length > 10) {
			let result = Math.floor(Math.random() * 1000).toString();
			nickname = "user" + result;
		}
		try {
			const { nextStep } = await signUp({
				username,
				password,
				options: {
					userAttributes: {
						nickname,
					},
				},
			});
			if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
				alert("Verfication code sent to your email!");
				return;
			} else {
				alert("Signup Complete!");
				navigate(`/login?returnURL=${returnURL}`);
			}
		} catch (e) {
			alert("Signup Failed!");
			return;
		}
	};
	const Confirm = async () => {
		const username = email;
		const confirmationCode = vcode;
		try {
			const { nextStep } = await confirmSignUp({
				username,
				confirmationCode,
			});
			if (nextStep.signUpStep === "DONE") {
				alert("Signup Complete!");
				navigate(`/login?returnURL=${returnURL}`);
			} else {
				alert("Signup Complete!");
				navigate(`/login?returnURL=${returnURL}`);
			}
		} catch (e) {
			alert("Verfication Failed!");
			return;
		}
	};

	return (
		<div className="container">
			<h1>Signup</h1>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br></br>
			<label htmlFor="password">Password: (Minimum length = 8)</label>
			<input
				type="password"
				id="password"
				name="password"
				value={pwd}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<br></br>
			<label htmlFor="password2">Confirm Password:</label>
			<input
				type="password"
				id="password2"
				name="password2"
				value={pwd2}
				onChange={(e) => setPassword2(e.target.value)}
			/>
			<br></br>
			<label htmlFor="nickname">
				Nickname(optional): (length: 3-10):
			</label>
			<input
				type="nickname"
				id="nickname"
				name="nickname"
				value={nick}
				onChange={(e) => setNickname(e.target.value)}
			/>
			<br></br>
			<button onClick={Signup}>Send Verification Code</button>
			<br></br>
			<label htmlFor="vcode">Verification code:</label>
			<input
				type="number"
				id="vcode"
				name="vcode"
				value={vcode}
				onChange={(e) => setVcode(e.target.value)}
			/>
			<br></br>
			<button onClick={Confirm}>Sign Up</button>
		</div>
	);
};

export default SignUpPage;

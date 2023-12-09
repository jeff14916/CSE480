import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import config from "../amplifyconfiguration.json";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { Authenticator } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify/utils";
Amplify.configure(config);
const LoginPage = () => {
	document.title = "Log In";
	const navigate = useNavigate();
	const location = useLocation();
	const { isAuthenticated, setAuthStatus } = useAuth();
	const queryParams = new URLSearchParams(location.search);
	const returnURL = queryParams.get("returnURL");
	useEffect(() => {
		if (isAuthenticated) {
			navigate(returnURL || "/");
		}
		const listener = (data: { payload: { event: any } }) => {
			switch (data.payload.event) {
				case "signedIn":
					setAuthStatus(true);
					navigate(returnURL || "/");
					hubListenerCancel();
					break;
			}
		};
		const hubListenerCancel = Hub.listen("auth", (data) => {});
		Hub.listen("auth", listener);
	}, [isAuthenticated, navigate, returnURL, setAuthStatus]);

	return <Authenticator signUpAttributes={["nickname"]}></Authenticator>;
};

export default LoginPage;

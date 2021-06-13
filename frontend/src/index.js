import React from 'react';
import ReactDOM from 'react-dom';
import "./login/css/index.css"

import Routes from "./login/Routes"
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
);
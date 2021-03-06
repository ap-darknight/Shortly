import React from "react"
import ReactDOM from  "react-dom"
import { ThemeProvider } from "styled-components"

import * as theme from "./config/theme"
import App from "./App"

ReactDOM.render(
<ThemeProvider theme={theme}>
<App/>
</ThemeProvider>, document.getElementById("root"))
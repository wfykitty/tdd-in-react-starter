import React from "react";
import { render } from "react-dom";
import JokeGenerator from "./jokeGenerator";

// const App = () => (
//     // <div style={styles}>
//         <JokeGenerator />
//     </div>
// );

// render(<App />, document.getElementById("root"));

render(
<React.StrictMode>
<JokeGenerator />
</React.StrictMode>,

document.getElementById('root')

);
 
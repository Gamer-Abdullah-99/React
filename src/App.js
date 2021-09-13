import React from "react";
// import CurrentStory from "./components/current-story";
import "./App.css";
// import Counter from "./components/counter";
// import UserInfo from "./components/user-info";
import GoogleSearchResult from './components/google-search-result.js'

// export default function App() {
//   return (
//     <div>
//       <CurrentStory />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <Counter />
//   )s
// }

// export default function App() {
//   return (
//     <div>
//       <UserInfo
//         userName="Abdullah"
//         institute="NED"
//         course="Civil Engineering"
//       />
//       <UserInfo
//         userName="Haider"
//         organization="Saylani"
//         designation="Teacher"
//       />
//     </div>
//   );

function App() {
  return (
    <GoogleSearchResult />
  )
}



export default App
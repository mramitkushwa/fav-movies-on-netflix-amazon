import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "Amazon";

// const FavS = () => {
// if(favSeries === "netflix"){
   //   return <Netflix />;
// } else {
   // return <Amazon />;
// }}


const App = () => (  
<>
<h1 className="heading_style"> List of top 5 Netflix Series </h1>
 {/*< FavS /> */}

 {favSeries === "Amazon" ? <Netflix /> : <Amazon />}

</>
);

export default App;
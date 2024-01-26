import Cuisine from "../../Components/Cuisine/Cuisine";
import Welcome from "../../Components/Welcome/Welcome";
import CardMenuItemsCon from "../../Components/CardMenuItemsCon/CardMenuItemsCon";
import Reserve from "../../Components/Reserve/Reserve";
import Chef from "../../Components/Chef/Chef";

const Home = () => {

  return (
    
    <>

      <Cuisine />
      <Welcome />
      <CardMenuItemsCon />
      <Reserve />
      <Chef />
      
    </>

  );

};

export default Home;
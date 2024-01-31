import Cuisine from "../../Components/Cuisine/Cuisine";
import Welcome from "../../Components/Welcome/Welcome";
import CardMenuItemsCon from "../../Components/CardMenuItemsCon/CardMenuItemsCon";
import Reserve from "../../Components/Reserve/Reserve";
import Chef from "../../Components/Chef/Chef";
import Customers from "../../Components/Customers/Customers";
import Time from "../../Components/Time/Time";

const Home = () => {

  const text = "Our popular menu";


  return (
    
    <>

      <Cuisine />
      <Welcome />
      <CardMenuItemsCon text={text} />
      <Reserve />
      <Chef />
      <Customers />
      <Time />
      
    </>

  );

};


export default Home;
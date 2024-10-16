import Menu from "../components/Menu";
import { useParams } from "react-router-dom";

const AboutPage = ()  => {
  let {id, name} = useParams();
  return (
    <div>

      <Menu />
      <h1>Welcome to About Page</h1>
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
    </div>
  )
}

export default AboutPage;

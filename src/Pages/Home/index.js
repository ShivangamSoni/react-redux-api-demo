// Styled Components
import { Main, Title } from "./StyledComponents";

// Components
import UserCard from "../../Components/UserCard";

// Redux Hook
import { useSelector } from "react-redux";

const Home = () => {
  const activeItem = useSelector((state) => state.active);

  return <Main>{activeItem == null ? <Title>Select From Nav</Title> : <UserCard {...activeItem} />}</Main>;
};

export default Home;

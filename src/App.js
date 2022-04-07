// Components
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

// Redux Hook
import { useDispatch } from "react-redux";
// React Hook
import { useEffect } from "react";

// Redux Action Creator
import { fetchNavbarItems } from "./REDUX/ActionCreators";

const App = () => {
  // Calling API on APP Load
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNavbarItems());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;

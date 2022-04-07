// Styled Components
import { Container, HamBurger, NavList, NavItem } from "./StyledComponents";

// React Hook
import { useState } from "react";

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Redux Action Creator
import { setActiveItem } from "../../REDUX/ActionCreators";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const [navItems, activeItem] = useSelector((state) => [state.nav, state.active]);

  const toggleNav = () => setShow((prev) => !prev);

  const setItem = (id) => {
    toggleNav();
    dispatch(setActiveItem(id));
  };

  return (
    <Container>
      <HamBurger onClick={toggleNav} className={show && "active"}>
        <span></span>
        <span></span>
        <span></span>
      </HamBurger>

      <NavList className={show && "active"}>
        {navItems.map((item) => (
          <NavItem key={item.id} onClick={() => setItem(item.id)} className={activeItem?.id === item.id && "active"}>
            {item.first_name}
          </NavItem>
        ))}
      </NavList>
    </Container>
  );
};

export default Navbar;

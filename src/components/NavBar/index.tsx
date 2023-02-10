import { Link } from "react-router-dom";
import {
  ContainerNavBar,
  FirstWord,
  IconsContent,
  List,
  LogoContent,
  Options,
  OptionsContent,
  UserSearch,
} from "./styled";
import user from "../../icons/mdi_user.svg";
import { useState } from "react";

export const NavBar = () => {
  const options = [
    { label: "Inicio", path: "/", id: 1 },
    { label: "Lançamentos", path: "/launch", id: 2 },
    { label: "Lista", path: "/list", id: 3 },
  ];
  const [selected, setSelected] = useState(false);

  return (
    <ContainerNavBar>
      <LogoContent>
        <h2>Anime</h2>
        <FirstWord>Guardian</FirstWord>
      </LogoContent>
      <OptionsContent>
        <List>
          {options.map((option) => (
            <Options
              selected={option.path === window.location.pathname}
              key={option.id}
            >
              <Link to={option.path} onClick={() => setSelected(!selected)}>
                {" "}
                {option.label}
              </Link>
            </Options>
          ))}
        </List>
      </OptionsContent>
      <IconsContent>
        <UserSearch>
          <img src={user} alt="user" />
        </UserSearch>
      </IconsContent>
    </ContainerNavBar>
  );
};

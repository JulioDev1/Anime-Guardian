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
  UserSize,
} from "./styled";
import search from "../../icons/ic_sharp-search.svg";
import user from "../../icons/mdi_user.svg";
import { useState } from "react";

export const NavBar = () => {
  const options = [
    { label: "Home", path: "/", id: 1 },
    { label: "Launch", path: "/launch", id: 2 },
    { label: "List", path: "/list", id: 3 },
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
        <UserSize>
          <img src={search} alt="search" />
        </UserSize>
        <UserSearch>
          <img src={user} alt="user" />
        </UserSearch>
      </IconsContent>
    </ContainerNavBar>
  );
};

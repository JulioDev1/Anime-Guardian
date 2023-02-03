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

import { useState } from "react";

interface Props {
  logo: string;
  otherLogo: string;
  home: string;
  launch: string;
  list: string;
  search?: string;
  user?: string;
  altSearch: string;
  altUser: string;
}

export const NavBar = ({
  logo,
  otherLogo,
  home,
  launch,
  list,
  search,
  user,
  altSearch,
  altUser,
}: Props) => {
  const [selected, setSelected] = useState(false);

  return (
    <ContainerNavBar>
      <LogoContent>
        <h2>{logo}</h2>
        <FirstWord>{otherLogo}</FirstWord>
      </LogoContent>
      <OptionsContent>
        <List>
          <Options selected={selected} onClick={() => setSelected(!selected)}>
            <Link to="/">{home}</Link>
          </Options>
          <Options selected={selected} onClick={() => setSelected(!selected)}>
            <Link to="/launch">{launch}</Link>
          </Options>
          <Options selected={selected} onClick={() => setSelected(!selected)}>
            <Link to="/list">{list}</Link>
          </Options>
        </List>
      </OptionsContent>
      <IconsContent>
        <UserSize>
          <img src={search} alt={altSearch} />
        </UserSize>
        <UserSearch>
          <img src={user} alt={altUser} />
        </UserSearch>
      </IconsContent>
    </ContainerNavBar>
  );
};

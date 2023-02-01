import {
  ContainerNavBar,
  FirstWord,
  IconsContent,
  List,
  LogoContent,
  OptionsContent,
  UserSearch,
  UserSize,
} from "./styled";

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
  return (
    <ContainerNavBar>
      <LogoContent>
        <h2>{logo}</h2>
        <FirstWord>{otherLogo}</FirstWord>
      </LogoContent>
      <OptionsContent>
        <List>
          <li>{home}</li>
          <li>{launch}</li>
          <li>{list}</li>
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

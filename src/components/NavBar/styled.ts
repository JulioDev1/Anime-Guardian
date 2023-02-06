import styled from "styled-components";
export const ContainerNavBar = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  align-items: center;
  color: white;
  justify-content: space-evenly;
  margin: 30px 80px 20px;
  height: 100px;
`;
export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const FirstWord = styled.h2`
  color: #2649ff;
`;
export const List = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  li {
    cursor: pointer;
  }
  &:active {
  }
`;
export const IconsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const UserSize = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  border-radius: 40px;
`;
export const OptionsContent = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin-right: 500px;
`;
export const UserSearch = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 40px;
`;
interface IOptions {
  selected: boolean;
}
export const Options = styled.li<IOptions>`
  a {
    color: ${(props) => (props.selected ? "white" : "#9e9e9e")};
    transition: 0.2s;
  }
  .active {
    color: white;
  }
  .inOtherClass {
    color: #9e9e9e;
  }
`;

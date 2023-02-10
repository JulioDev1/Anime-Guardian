import styled from "styled-components";

export const SearchAnime = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 30rem;
  font-family: "Poppins", sans-serif;
`;
export const Input = styled.input`
  background: none;
  border: 1px solid #818181;
  height: 40px;
  width: 90%;
  border-radius: 5px 0px 0px 5px;
  ::placeholder {
    color: #434343;
    font-family: "Poppins", sans-serif;
  }
`;
export const SearchIcon = styled.button`
  height: 40px;
  display: flex;
  align-items: center;
  width: 10%;
  border: 1px solid #818181;
  border-radius: 0px 5px 5px 0px;
  justify-content: center;
  cursor: pointer;
  background: none;
  transition: 0.2s;
  :hover {
    background-color: #818181;
  }
`;
export const Imgicon = styled.img`
  transition: 0.2s;
  :hover {
    fill: black;
  }
`;

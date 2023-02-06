import styled from "styled-components";

export const PostContainer = styled.div`
  font-family: "Roboto";
  display: flex;
  align-content: center;
  flex-direction: column;

  flex: none;
  img {
    height: 318px;
    width: 225px;
  }
`;
export const Poster = styled.img`
  filter: drop-shadow(5px 0px 13px #000);
`;
export const PostContent = styled.div`
  width: 90%;
  margin: 20px 15px;
`;
export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
`;
export const AnimeTitle = styled.h1`
  font-size: 15px;
  color: white;
`;

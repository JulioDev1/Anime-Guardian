import styled from "styled-components";

export const PostContainer = styled.div`
  font-family: "Roboto";
  display: flex;
  align-content: center;
  flex-direction: column;
  img {
    height: 280px;
    width: 165px;
  }
`;
export const Poster = styled.img`
  filter: drop-shadow(5px 0px 13px #000);
`;
export const PostContent = styled.div`
  max-width: 165px;
  margin: 20px 15px;
  flex-wrap: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const InfoContent = styled.div`
  display: flex;
  align-items: center;
`;
export const AnimeTitle = styled.span`
  font-size: 15px;
  max-width: 90%;
  max-height: 30px;
  color: white;
`;

import styled from "styled-components";

export const PostContainer = styled.div`
  font-family: "Roboto";
  display: flex;
  align-content: center;
  flex-direction: column;
  margin: 0;
  position: relative;
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
  cursor: pointer;
`;
export const InfoContent = styled.div`
  display: flex;
  align-items: center;
`;
export const AnimeTitle = styled.span`
  /* font-size: 15px; */
  max-width: 90%;
  max-height: 30px;
  color: white;
`;
export const ButtonPlay = styled.button`
  &.button-play {
    position: absolute;
    top: 39%;
    left: 20%;
    z-index: 3;
    background-color: #2649ff;
    width: 45px;
    height: 45px;
    color: white;
    border: none;
    border-radius: 30px;
    filter: drop-shadow(5px 1px 4px #000);
  }
  img {
    width: 12px;
    height: 12px;
  }
`;
export const ButtonAdd = styled.button`
  &.button-add {
    position: absolute;
    top: 39.5%;
    left: 50%;
    z-index: 3;
    background-color: #2649ff;
    width: 45px;
    height: 45px;
    color: white;
    border: none;
    border-radius: 30px;
    filter: drop-shadow(5px 1px 4px #000);
  }
  img {
    width: 17px;
    height: 17px;
    top: 12px;
    color: white;
  }
`;

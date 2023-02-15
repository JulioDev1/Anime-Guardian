import styled, { css } from "styled-components";

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
  transition: 0.3s;
  :hover {
    background-color: #000000;
    opacity: 20%;
    transform: 20px;
    filter: drop-shadow(22px 12px 19px #000);
  }
`;
export const PostContent = styled.div`
  max-width: 165px;
  margin: 20px 15px;
  flex-wrap: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: 0.2s;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
    cursor: pointer;
  }
  &.hide {
    display: none;
  }
  img {
    width: 17px;
    height: 17px;
  }
`;
export const ButtonAdd = styled.button`
  &.button-add {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 39%;
    left: 50%;
    z-index: 3;
    background-color: #2649ff;
    width: 45px;
    height: 45px;
    color: white;
    border: none;
    border-radius: 30px;
    filter: drop-shadow(5px 1px 2px #000);
    cursor: pointer;
  }
  &.hide {
    display: none;
  }
  img {
    width: 25px;
    height: 25px;
    top: 12px;
    color: white;
  }
`;

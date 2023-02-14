import styled from "styled-components";

export const ContainerPoster = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #0f1012;
  overflow: hidden;
  max-width: 500rem;
  width: 2000px;
  min-width: 800px;
  border-radius: 5px;
  margin-bottom: 20px;
  h1 {
    color: white;
  }
`;
export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: center;
  margin-top: 80px;
`;
export const RightButton = styled.button`
  border: none;
  color: none;
  background: none;
  width: 11px;
  height: 18px;
  cursor: pointer;
  transform: rotate(180deg);
`;
export const LeftButton = styled.button`
  border: none;
  width: 11px;
  height: 18px;
  background: none;
  cursor: pointer;
`;

export const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1300px;
  width: 1080px;
  min-width: 800px;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  gap: 20px;
  cursor: pointer;
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Titles = styled.span`
  color: white;
  font-family: "Poppins";
  font-size: 15px;
  text-align: start;
  margin-bottom: 10px;
`;
export const SeparateDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  width: 1000px;
  height: 55px;
  border-radius: 5px;
  border: 1px solid #2649ff;
  margin-top: 100px;
  color: white;
  font-family: "Poppins";
  font-size: 15px;
  margin-bottom: 30px;
`;
export const AnimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const AnimeSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -15px;
  width: 75rem;
  border-radius: 10px;
  margin-right: -15px;
  margin-top: -15px;
  background-color: #0f1012;
`;

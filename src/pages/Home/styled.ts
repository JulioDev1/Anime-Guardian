import styled from "styled-components";

export const ContainerPoster = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #0f1012;
  overflow-x: hidden;
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
  transform: rotate(180deg);
`;
export const LeftButton = styled.button`
  border: none;
  width: 11px;
  height: 18px;
  background: none;
`;

export const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 1035px;
  min-width: 800px;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Titles = styled.span`
  color: white;
  font-family: "Poppins";
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

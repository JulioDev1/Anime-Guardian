import {
  ContainerPoster,
  HomeContainer,
  RightButton,
  LeftButton,
  CarrouselContainer,
  PageContainer,
  Titles,
} from "./styled";

import { AnimeCard } from "../../components/AnimeCard";

import { useEffect, useState, useRef } from "react";

import Vector from "../../icons/Vector.svg";

export function Home() {
  const [info, setInfo]: any = useState([]);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [newPosition, setNewPosition] = useState(0);

  useEffect(() => {
    fetch("https://gogoanime.consumet.stream/popular")
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
  }, []);

  const handleClickRight = (e: any) => {
    e.preventDefault();
    const position = carousel.current?.offsetWidth;
    if (position) {
      setNewPosition((value) => {
        return (value += Number(position));
      });
    }
    console.log(newPosition);
    carousel.current?.scrollTo(Number(newPosition), 0);
  };

  const handleClickLeft = (e: any) => {
    e.preventDefault();

    const position = carousel.current?.offsetWidth;

    setNewPosition((value) => {
      return value - Number(position);
    });
    console.log(newPosition);
    carousel.current?.scrollTo(Number(newPosition), 0);
  };

  return (
    <HomeContainer>
      <PageContainer>
        <Titles>Mais populares</Titles>
        <CarrouselContainer>
          <LeftButton
            onClick={
              newPosition >= 0
                ? (event: MouseEvent) => handleClickLeft(event)
                : console.log("bloqueado")
            }
          >
            <img src={Vector} alt="leftClick" />
          </LeftButton>
          <ContainerPoster ref={carousel}>
            {info.map((anime: any) => (
              <AnimeCard
                animeImg={anime.animeImg}
                animeTitle={anime.animeTitle}
                animeId={anime.animeId}
              />
            ))}
          </ContainerPoster>
          <RightButton onClick={handleClickRight}>
            <img src={Vector} alt="rightClick" />
          </RightButton>
        </CarrouselContainer>
      </PageContainer>
    </HomeContainer>
  );
}

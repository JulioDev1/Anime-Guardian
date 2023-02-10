import {
  ContainerPoster,
  HomeContainer,
  RightButton,
  LeftButton,
  CarrouselContainer,
  PageContainer,
  Titles,
  SeparateDiv,
  AnimeSearch,
  AnimeContainer,
} from "./styled";

import { AnimeCard } from "../../components/AnimeCard";

import { useEffect, useState, useRef } from "react";

import Vector from "../../icons/Vector.svg";
import { Search } from "../../components/Search";

export function Home() {
  const [info, setInfo]: any = useState([]);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [newPosition, setNewPosition] = useState(0);
  const [results, setResult] = useState([]);

  useEffect(() => {
    fetch("https://gogoanime.consumet.stream/popular")
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
  }, []);

  const loadAnime = (searchAnime: string) => {
    fetch(`https://gogoanime.consumet.stream/search?keyw=${searchAnime}`)
      .then((response) => response.json())
      .then((animeList) => setResult(animeList));
  };

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
      return Math.abs((value -= Number(position)));
    });

    console.log(newPosition);
    carousel.current?.scrollTo(Number(newPosition), 0);
  };

  return (
    <HomeContainer>
      <PageContainer>
        <Titles>Mais bem votados</Titles>
        <CarrouselContainer>
          <LeftButton onClick={handleClickLeft}>
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
        <SeparateDiv>Outros Animes</SeparateDiv>
        <AnimeContainer>
          <Search loadAnime={loadAnime} />
          <AnimeSearch>
            {results.map((anime: any) => (
              <AnimeCard
                animeImg={anime.animeImg}
                animeTitle={anime.animeTitle}
                animeId={anime.animeId}
              />
            ))}
          </AnimeSearch>
        </AnimeContainer>
      </PageContainer>
    </HomeContainer>
  );
}

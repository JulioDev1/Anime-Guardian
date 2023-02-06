import { ContainerPoster, HomeContainer } from "./styled";
import { AnimeCard } from "../../components/AnimeCard";
import { useEffect, useState, useRef } from "react";

export function Home() {
  const [info, setInfo]: any = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("https://gogoanime.consumet.stream/popular")
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
  }, []);
  // const handleClickRight = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   console.log(carousel.current.offsetWidth);
  // };

  return (
    <HomeContainer>
      <ContainerPoster ref={carousel}>
        {info.map((anime: any) => (
          <AnimeCard
            animeImg={anime.animeImg}
            animeTitle={anime.animeTitle}
            animeId={anime.animeId}
          />
        ))}
      </ContainerPoster>
    </HomeContainer>
  );
}

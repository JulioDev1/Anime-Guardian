import { ContainerPoster, HomeContainer } from "./styled";
import { AnimeCard } from "../../components/AnimeCard";
import { useEffect, useState, useRef } from "react";

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
      <button
        onClick={
          newPosition >= 0
            ? (event: MouseEvent) => handleClickLeft(event)
            : console.log("bloqueado")
        }
      >
        click to left
      </button>
      <ContainerPoster ref={carousel}>
        {info.map((anime: any) => (
          <AnimeCard
            animeImg={anime.animeImg}
            animeTitle={anime.animeTitle}
            animeId={anime.animeId}
          />
        ))}
      </ContainerPoster>
      <button onClick={handleClickRight}>click to right</button>
    </HomeContainer>
  );
}

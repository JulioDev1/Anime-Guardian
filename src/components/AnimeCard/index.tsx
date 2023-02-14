import {
  PostContainer,
  PostContent,
  AnimeTitle,
  Poster,
  InfoContent,
  ButtonPlay,
  ButtonAdd,
} from "./styled";
import { useState } from "react";
import Add from "../../icons/material-symbols_add.svg";
import Play from "../../icons/Polygon 2.svg";

interface Props {
  animeImg?: string;
  animeTitle: string;
  animeId: string;
}
export const AnimeCard = ({ animeImg, animeTitle, animeId }: Props) => {
  const [view, setView] = useState(false);

  const viewPlayButton = (cardId: string) => {
    const playButton = document.querySelector(`#${cardId} .playButton`);
    if (!view) {
      playButton?.classList.remove("hide");
      console.log("esta aparecendo");
    } else {
      playButton?.classList.add("hide");
      console.log("nao esta aparecendo");
    }
    setView(!view);
  };
  return (
    <PostContainer key={animeId} id={animeId}>
      <ButtonPlay className="button-play">
        <img src={Play} alt="play" />
      </ButtonPlay>
      <ButtonAdd className="button-add">
        <img src={Add} alt="add" />
      </ButtonAdd>
      <PostContent
        onMouseEnter={() => {
          viewPlayButton(animeId);
        }}
        onMouseLeave={() => {
          viewPlayButton(animeId);
        }}
      >
        {/* <ActionIfMoveTheMouse> */}

        <Poster src={animeImg} alt="anime" />
        <InfoContent>
          <AnimeTitle>{animeTitle}</AnimeTitle>
        </InfoContent>
      </PostContent>
      {/* </ActionIfMoveTheMouse> */}
    </PostContainer>
  );
};

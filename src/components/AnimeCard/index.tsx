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
  className: any;
}

export const AnimeCard = ({
  animeImg,
  animeTitle,
  animeId,
  className,
}: Props) => {
  const [view, setView] = useState(true);

  const viewPlayButton = (cardId: string, event: any) => {
    const elementoPai = event.currentTarget;
    const elementoRelacionado = event.relatedTarget;

    console.log(elementoRelacionado);

    if (elementoPai.contains(elementoRelacionado)) {
      console.log("a");
    }
    const card = document.querySelector(`#${cardId}`);
    const buttons = card?.querySelectorAll("button");
    if (view) {
      setView(false);
    } else {
      setView(true);
    }

    if (view) {
      if (buttons) {
        for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];

          button.classList.remove("hide");
        }
      }
    } else {
      if (buttons) {
        for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];

          button.classList.add("hide");
        }
      }
    }
  };

  return (
    <PostContainer key={animeId} id={animeId}>
      <ButtonPlay className="button-play hide">
        <img src={Play} alt="play" />
      </ButtonPlay>
      <ButtonAdd className="button-add hide">
        <img src={Add} alt="add" />
      </ButtonAdd>
      <PostContent
        onMouseEnter={(event) => {
          viewPlayButton(animeId, event);
          console.log("enter");
        }}
        onMouseLeave={(event) => {
          viewPlayButton(animeId, event);
          console.log("leave");
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

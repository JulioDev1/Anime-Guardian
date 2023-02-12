import {
  PostContainer,
  PostContent,
  AnimeTitle,
  Poster,
  InfoContent,
} from "./styled";
import { useState } from "react";

interface Props {
  animeImg?: string;
  animeTitle: string;
  animeId: string;
}
export const AnimeCard = ({ animeImg, animeTitle, animeId }: Props) => {
  const [view, setView] = useState(false);
  const viewPlayButton = () => {
    const playButton = document.getElementById("playbutton");
    setView(!view);
    if (view) {
      playButton?.classList.remove("hide");
      console.log("esta aparecendo");
    } else {
      playButton?.classList.add("hide");
      console.log("nao esta aparecendo");
    }
  };
  return (
    <PostContainer key={animeId}>
      <PostContent
        onMouseEnter={() => {
          viewPlayButton();
        }}
        onMouseLeave={() => {
          viewPlayButton();
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

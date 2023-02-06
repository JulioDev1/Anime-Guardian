import {
  PostContainer,
  PostContent,
  AnimeTitle,
  Poster,
  InfoContent,
} from "./styled";

interface Props {
  animeImg?: string;
  animeTitle: string;
  animeId: number;
}
export const AnimeCard = ({ animeImg, animeTitle, animeId }: Props) => {
  return (
    <PostContainer key={animeId}>
      <PostContent>
        <Poster src={animeImg} alt="anime" />
        <InfoContent>
          <AnimeTitle>{animeTitle}</AnimeTitle>
        </InfoContent>
      </PostContent>
    </PostContainer>
  );
};

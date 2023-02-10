import { useState } from "react";
import search from "../../icons/ic_sharp-search.svg";
import { Imgicon, Input, SearchAnime, SearchIcon } from "./styled";

///interface
interface searchProps {
  loadAnime: (anime: string) => void;
}

export const Search: React.FC<searchProps> = ({ loadAnime }) => {
  const [animeName, setAnime] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return loadAnime(animeName);
  };

  return (
    <SearchAnime onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite o nome do anime"
        onChange={(e) => setAnime(e.target.value)}
      />
      <SearchIcon>
        <Imgicon src={search} alt="search Icon" />
      </SearchIcon>
    </SearchAnime>
  );
};

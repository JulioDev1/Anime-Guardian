import { NavBar } from "../../components/NavBar";
import search from "../../icons/ic_sharp-search.svg";
import user from "../../icons/mdi_user.svg";
export function Home() {
  return (
    <div>
      <NavBar
        logo="Anime"
        otherLogo="Guardian"
        home="Home"
        launch="Lançamentos"
        list="Lista"
        user={user}
        search={search}
        altSearch="search"
        altUser="user"
      />
    </div>
  );
}

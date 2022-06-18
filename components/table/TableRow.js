import { useContext } from "react";
import { SpotifyContext } from "../../context/context";

const styles = {
  th: `pb-5 hover:opacity-50 cursor-pointer`,
};

const TableRow = ({ song, index }) => {
  const { playOnSelect, secondsToMin } = useContext(SpotifyContext);

  return (
    <tbody>
      <tr onClick={() => playOnSelect(song)}>
        <th className={styles.th}>{index}</th>
        <th className={styles.th}>
          <div>
            <p className="font-bold">{song.title}</p>
            <p className="opacity-50">{song.artist || "Artist"}</p>
          </div>
        </th>
        <th className={styles.th}>{"I'm working on it :("}</th>
      </tr>
    </tbody>
  );
};

export default TableRow;

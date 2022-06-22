import { useContext } from "react";
import { SpotifyContext } from "../../context/context";

const styles = {
  th: `pb-5 hover:opacity-50 cursor-pointer`,
};

const TableRow = ({ song, index }) => {
  const { playOnSelect } = useContext(SpotifyContext);

  return (
    <tbody>
      <tr onClick={() => playOnSelect(song)}>
        <th className={styles.th}>{index}</th>
        <th className={styles.th}>
          <div>
            <p className="font-bold">{song.title || "Title"}</p>
            <p className="opacity-50">{song.artist || "Artist"}</p>
          </div>
        </th>
      </tr>
    </tbody>
  );
};

export default TableRow;

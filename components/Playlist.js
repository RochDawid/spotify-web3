import TableRow from "./table/TableRow";

const styles = {
  table: `w-full text-left`,
  tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
  tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`,
};

const Playlist = ({ songs }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody className={styles.tableHeader}>
          <tr>
            <th className="pb-3">#</th>
            <th className="pb-3">SONG</th>
            <th className="pb-3">
              <img alt="" src="assets/time.svg" />
            </th>
          </tr>
        </tbody>
        <tbody className="mb-6 block"></tbody>

        {songs.map((song, i) => {
          return <TableRow key={i} index={i+1} song={song.account} />;
        })}
      </table>
    </div>
  );
};

export default Playlist;

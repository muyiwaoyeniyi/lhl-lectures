const { client } = require("./connection");

const getAllAlbums = () => {
  const request = client.query("SELECT * FROM albums;");
  return request.then((r) => r.rows);
};

// Watch for SQL injection
const createNewAlbum = (album) => {
  const values = [
    album.album_name,
    album.artist_name,
    album.release_date,
    album.genre,
  ];
  return client.query(
    "INSERT INTO albums (album_name, artist_name, release_date, genre) VALUES ($1, $2, $3, $4)",
    values
  );
};

const deleteAlbum = (albumId) => {
  return client.query("DELETE FROM albums where albums.id = $1", [albumId]);
};

module.exports = {
  deleteAlbum,
  getAllAlbums,
  createNewAlbum,
};

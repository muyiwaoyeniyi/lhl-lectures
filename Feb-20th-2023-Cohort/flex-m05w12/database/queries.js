const { client } = require("./connection");

const getAllAlbums = () => {
  return client.query("SELECT * FROM albums;");
};

// sql injection VALUES ('DROP table albums;', ${album.artist_name}, ${album.release_date}, ${album.genre})
const createAlbum = (album) => {
  const values = [
    album.album_name,
    album.artist_name,
    album.release_date,
    album.genre,
  ];

  return client.query(
    `INSERT INTO albums (album_name, artist_name, release_date, genre)
     VALUES ($1, $2, $3, $4)
     RETURNING *;
    `,
    values
  );
};

const deleteAlbum = (albumId) => {
  return client.query("DELETE FROM albums WHERE albums.id = $1;", [albumId]);
};

module.exports = {
  createAlbum,
  deleteAlbum,
  getAllAlbums,
};

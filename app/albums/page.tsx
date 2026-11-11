
type Album = {
  userId: number;
  id: number;
  title: string;
};

export default async function AlbumsPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums?_limit=8",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Помилка завантаження альбомів");
  }

  const albums: Album[] = await res.json();

  return (
    <main style={{ padding: "30px" }}>
      <h1>Список фотоальбомів</h1>

      <div className="albums">
        {albums.map((album) => (
          <article key={album.id} className="album">
            <h2>{album.title}</h2>
            <p>ID альбому: {album.id}</p>
            <p>ID користувача: {album.userId}</p>
          </article>
        ))}
      </div>

      <style>{`
        .albums {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 25px;
        }

        .album {
          padding: 20px;
          border: 1px solid #999;
          border-radius: 10px;
          background: #f5f5f5;
          color: #111;
        }

        .album h2 {
          font-size: 18px;
        }
      `}</style>
    </main>
  );
}
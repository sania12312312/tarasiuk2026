
import InteractiveList from "./InteractiveList";

export default function PracticePage() {
  const lessons = [
    { id: 1, day: "Понеділок", subject: "Математика", room: "101" },
    { id: 2, day: "Понеділок", subject: "Інформатика", room: "205" },
    { id: 3, day: "Вівторок", subject: "Українська мова", room: "103" },
    { id: 4, day: "Середа", subject: "Фізика", room: "204" },
    { id: 5, day: "Четвер", subject: "Англійська мова", room: "105" },
    { id: 6, day: "П'ятниця", subject: "Історія", room: "202" },
  ];

  return (
    <main style={{
      maxWidth: "700px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial"
    }}>
      <h1>Мій розклад занять</h1>
      <p>Загальна кількість занять: {lessons.length}</p>

      <InteractiveList lessons={lessons} />
    </main>
  );
}

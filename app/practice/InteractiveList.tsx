
"use client";

import { useState } from "react";

type Lesson = {
  id: number;
  day: string;
  subject: string;
  room: string;
};

export default function InteractiveList({
  lessons,
}: {
  lessons: Lesson[];
}) {
  const [selectedDay, setSelectedDay] = useState("Усі дні");
  const [showRooms, setShowRooms] = useState(true);

  const filteredLessons = lessons.filter((lesson) => {
    return selectedDay === "Усі дні" || lesson.day === selectedDay;
  });

  return (
    <div>
      <h2>Розклад</h2>

      <label>Виберіть день: </label>

      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        <option>Усі дні</option>
        <option>Понеділок</option>
        <option>Вівторок</option>
        <option>Середа</option>
        <option>Четвер</option>
        <option>П'ятниця</option>
      </select>

      <br /><br />

      <button onClick={() => setShowRooms(!showRooms)}>
        {showRooms ? "Приховати аудиторії" : "Показати аудиторії"}
      </button>

      <h3>Список занять:</h3>

      {filteredLessons.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
        filteredLessons.map((lesson) => (
          <div
            key={lesson.id}
            style={{
              border: "1px solid gray",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          >
            <p><b>День:</b> {lesson.day}</p>
            <p><b>Предмет:</b> {lesson.subject}</p>

            {showRooms && (
              <p><b>Аудиторія:</b> {lesson.room}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

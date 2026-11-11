import RequestForm from "./components/RequestForm";

export default function Home() {
  return (
    <main style={{
      maxWidth: "600px",
      margin: "50px auto",
      padding: "30px",
      fontFamily: "Arial",
      backgroundColor: "#f3f4f6",
      borderRadius: "12px"
    }}>
      <h1 style={{ textAlign: "center" }}>
        Заявка до бібліотеки
      </h1>

      <p style={{ textAlign: "center" }}>
        Заповніть форму для замовлення книги
      </p>

      <RequestForm />
    </main>
  );
}
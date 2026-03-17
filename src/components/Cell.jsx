export default function Cell({ letter, color }) {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        border: "2px solid #999",
        fontWeight: "bold",
        fontSize: "20px",
        backgroundColor: color,
        color: "white"
      }}
    >
      {letter}
    </div>
  );
}
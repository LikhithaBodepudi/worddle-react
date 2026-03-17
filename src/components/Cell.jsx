export default function Cell({ letter, color,isCurrentRow,isFlipping}) {
  const borderColor = isCurrentRow ? "#ffffff" : "#3a3a3c";
  const boxShadow = isCurrentRow ? "0 0 5px #ffffff" : "none";
  return (
    <div
      className={isFlipping ? "flip" : ""}
      style={{
        width: "60px",
        height: "60px",
        lineHeight: "50px",
        textAlign: "center",
        border: `2px solid ${borderColor}`,
        fontWeight: "bold",
        fontSize: "20px",
        backgroundColor: color|| "#121213",
        color: "white",
        boxShadow: boxShadow,
      }}
    >
      {letter}
    </div>
  );
}
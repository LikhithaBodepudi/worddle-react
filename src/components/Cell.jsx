export default function Cell({ letter, color,isCurrentRow,isFlipping,isRevealed }) {
  const borderColor = isCurrentRow ? "#ffffff" : "#3a3a3c";
  const boxShadow = isCurrentRow ? "0 0 5px #ffffff" : "none";
  const getBackground = () => {
    if (!color) return "#121213";           // empty cell
    if (isFlipping) return isRevealed ? color : "#121213"; // animating
    return color;                            // already submitted, always show color
  };
  return (
    <div
      className={isFlipping ? "flip" : ""}
      style={{
        width: "60px",
        height: "60px",
        textAlign: "center",
        border: `2px solid ${borderColor}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "20px",
        backgroundColor: getBackground(),
        color: "white",
        boxShadow: boxShadow,
      }}
    >
      {letter}
    </div>
  );
}
export default function Keyboard({ onKeyPress, keyColors }) {
    const rows=["QWERTYUIOP",
    "ASDFGHJKL",
    "ZXCVBNM"
    ];

    return(
        <div style={{ marginTop: "20px" }}>
            {rows.map((row,i)=>(
                <div key={i} style={{marginBottom:"8px"}}>
                    {row.split("").map((key)=>(
                        <button
                        key={key}
                        onClick={()=>onKeyPress(key)}
                        style={{
                            margin:"2px",
                            padding:"10px",
                            minWidth:"35px",
                            backgroundColor:keyColors[key] || "#3a3a3c",
                            color:"white",
                            border:"none",
                            borderRadius:"4px",
                            cursor:"pointer"
                        }}
                        >
                            {key}
                        </button>
                    ))}
        </div>
    ))}

     <div style={{ marginTop: "10px" }}>
        <button onClick={() => onKeyPress("ENTER")}>Enter</button>
        <button onClick={() => onKeyPress("BACKSPACE")}>⌫</button>
      </div>

    </div>
  );

}

import React from "react";

export default function Menubar({ cash, tokens, onOpenPhonebook, className }) {
    const container = {
        position: "fixed",
        top: 12,
        right: 12,
        display: "flex",
        gap: 10,
        alignItems: "center",
        background: "rgba(0,0,0,0.6)",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: 8,
        boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
        zIndex: 1000,
        fontSize: 14,
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    };

    const item = {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 8px",
        background: "rgba(255,255,255,0.03)",
        borderRadius: 6,
    };

    const btn = {
        appearance: "none",
        border: 0,
        background: "transparent",
        color: "#fff",
        padding: 6,
        borderRadius: 6,
        cursor: "pointer",
    };

    return (
        <div style={container} className={className}>
            <div style={item} title="Cash">
                <span style={{ fontWeight: 700 }}>${cash}</span>
            </div>

            {/* <div style={item} title="Tokens">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    🎟️ <span style={{ fontWeight: 700 }}>{tokens}</span>
                </span>
            </div> */}

            {/* <button
                style={btn}
                onClick={onOpenPhonebook}
                aria-label="Open phonebook"
                title="Phonebook"
            >
                📒
            </button> */}
        </div>
    );
}

/*
Example usage:

import Menubar from "./component/menubar/menubar";

function App() {
    const openPhonebook = () => { /* open modal / navigate */ /* };

    return <Menubar cash={1200} tokens={5} onOpenPhonebook={openPhonebook} />;
}
*/
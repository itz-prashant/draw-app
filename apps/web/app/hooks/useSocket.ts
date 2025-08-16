
import { useEffect, useRef, useState } from "react";
import { WS_URL } from "../config";

export function useSocket() {
    const socketRef = useRef<WebSocket | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Socket ek hi baar create hoga
        if (!socketRef.current) {
            const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmY2NDg5Zi0wZWVhLTQ2ZWUtOTkyZC04NzJhOTM2YjU4NWYiLCJpYXQiOjE3NTUzMTk5NTd9.ifoE1MIc40IBlhYI6iezxBiPjP2o_kIh-k-iLwpK9mw`);
            socketRef.current = ws;

            ws.addEventListener("open", () => {
                setLoading(false);
            });

            // Optional: cleanup when component unmounts
            return () => {
                ws.close();
            };
        }
    }, []);

    return {
        socket: socketRef.current,
        loading,
    };
}

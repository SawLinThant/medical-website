import { SessionData } from "@/modules/checkout";
import { useState, useEffect } from "react";
import { getSessionData } from "../utils";

export const useGetSession = () => {
    const [sessionData, setSessionData] = useState<SessionData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const data = await getSessionData();
                setSessionData(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchSessionData();
    }, []);

    return { sessionData, loading, error };
};
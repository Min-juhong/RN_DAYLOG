import { set } from "date-fns";
import React, {useEffect, useRef} from "react";
import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import logsStorages from "../storages/logsStorage";

const LogContext = createContext();

export function LogContextProvider({children}) {
    const initialLogsRef = useRef(null);
    const [logs, setLogs] = useState([]);

    const onCreate = ({title, body, date}) => {
        const log = {
            id: uuidv4(),
            title,
            body,
            date,
        };
        setLogs([log, ...logs]);
    };
    const onModify = (modified) => {
        const nextLogs = logs.map((log) =>
        log.id === modified.id ? modified : log,);
        setLogs(nextLogs);
    };
    const onRemove = (id) => {
        const nextLogs = logs.filter((log) => log.id !== id);
        setLogs(nextLogs);
    };

    useEffect(() => {
        (async () => {
            const savedLogs = await logsStorages.get();
            if (savedLogs) {
                initialLogsRef.current = savedLogs;
                setLogs(savedLogs);
            }
        })();
    }, []);

    useEffect(() => {
        if (logs === initialLogsRef.current) {
            return;
        }
        logsStorages.set(logs);
    }, [logs]);

    return(
        <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
            {children}
        </LogContext.Provider>
    );
}

export default LogContext;
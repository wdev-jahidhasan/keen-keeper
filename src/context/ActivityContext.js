"use client";
import { createContext, useContext, useState, useEffect } from "react";
const ActivityContext = createContext();
export const ActivityProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);

const addLog = (contactName, activityType) => {
    const newLog = {
      id: Date.now(),
      name: contactName,
      type: activityType,
      time: new Date().toLocaleString(),
    };
    setLogs((prevLogs) => [newLog, ...prevLogs]);
  };

  return (
    <ActivityContext.Provider value={{ logs, addLog }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => useContext(ActivityContext);
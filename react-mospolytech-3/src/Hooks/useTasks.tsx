import { useState } from "react";
import { IMyForm } from "../interfaces/IMyForm";

export const useTasks = () => {
    const [tasks, setTasks] = useState<IMyForm[]>([]);
    return ({tasks, setTasks})
}
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addTask } from "../stores/taskReducer";

function Home() {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("Normal");
    const [status,setStatus] = useState("Pending")
    const dispatch = useDispatch();

    const handleAddTask = (e) => {
        e.preventDefault();
        dispatch(addTask({ text, date, priority,status }));
        Swal.fire({
            title: "Task Successfully Added",
            icon: "success",
            timer: 1000,
        });
        setText("");
        setDate("");
        setPriority("Normal");
    };

    return (
        <div className="w-full h-screen p-2 mt-9">
            <p className="text-3xl font-bold p-2 flex justify-center content-center font-serif text-amber-600">
                ADD TASK
            </p>
            <div className="flex justify-center content-center">
                <div className="mt-3 p-5">
                    <form onSubmit={handleAddTask}>
                        <div>
                            <label className="block font-semibold">Task</label>
                            <input
                                type="text"
                                name="task"
                                placeholder="Task"
                                required
                                value={text}
                                className="p-2 w-80 text-black border border-amber-500 bg-gray-100 pl-3 pr-3 mt-1 outline-none"
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className="mt-3">
                            <label className="block font-semibold">Task Date</label>
                            <input
                                type="date"
                                name="taskDate"
                                required
                                value={date}
                                className="p-2 w-80 text-black border border-amber-500 mt-1 bg-gray-100 pl-3 pr-3 outline-none"
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="mt-3">
                            <label className="block font-semibold">Task Priority</label>
                            <select
                                name="taskPriority"
                                className="border border-amber-600 mt-1"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value="Normal">Normal</option>
                                <option value="important">Important</option>
                                <option value="very important">Very Important</option>
                            </select>
                        </div>
                        <div className="mt-10">
                            <input
                                type="submit"
                                className="w-full border bg-amber-600 p-1 font-bold text-lg shadow-lg hover:bg-amber-800"
                                value="Add Task"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;

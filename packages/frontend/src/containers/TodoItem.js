import React, {useCallback, useRef, useState} from "react";
import axios from "axios";
import useOnClickOutside from "use-onclickoutside";

import useDoubleClick from "../hooks/useDoubleClick";
import useOnEnter from "../hooks/useOnEnter";
import useTodos from "../reducers/useTodos";

export default function TodoItem({todo}) {
    const [, {deleteTodo, setLabel, toggleDone}] = useTodos(() => null);
    const [editing, setEditing] = useState(false),
        [itemUpdate, setItemUpdate] = useState(todo);
    const onDelete = useCallback(async () => {
        try {
            const response = await axios({
                method: "post",
                url: `${process.env.API_URL}/deleteTodo`,
                data: {id: todo.id}
            });
            if (response.status === 200) {
                deleteTodo(todo.id);
            }
        } catch (err) {
            console.log(err);
        }
    }, [todo.id]);
    const onDone = useCallback(async () => {
        const response = await updateTodoApi({
            ...itemUpdate,
            done: !itemUpdate.done,
            completed: !itemUpdate.completed
        });
        return toggleDone(response.id);
    }, [todo.id]);
    const updateTodoApi = async todo => {
        try {
            const response = await axios({
                method: "post",
                url: `${process.env.API_URL}/updateTodo`,
                data: todo
            });
            if (response.status === 200) {
                return response.data;
            }
        } catch (err) {
            console.log(err);
        }
    };
    const onChange = useCallback(
        event => {
            setLabel(todo.id, event.target.value);
            setItemUpdate({...itemUpdate, label: event.target.value});
        },
        [todo.id]
    );

    const handleViewClick = useDoubleClick(null, () => setEditing(true));
    const finishedCallback = useCallback(async () => {
        setEditing(false);
        let response = await updateTodoApi(itemUpdate);
        setLabel(response.id, response.label.trim());
    }, [todo]);

    const onEnter = useOnEnter(finishedCallback, [todo]);
    const ref = useRef();
    useOnClickOutside(ref, finishedCallback);

    return (
        <li
            onClick={handleViewClick}
            className={`${editing ? "editing" : ""} ${todo.done ? "completed" : ""}`}
        >
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={todo.done}
                    onChange={onDone}
                    autoFocus={true}
                />
                <label>{todo.label}</label>
                <button className="destroy" onClick={onDelete}/>
            </div>
            {editing && (
                <input
                    ref={ref}
                    className="edit"
                    value={todo.label}
                    onChange={onChange}
                    onKeyPress={onEnter}
                />
            )}
        </li>
    );
}

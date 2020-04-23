import React, {useCallback, useEffect, useMemo} from "react";
import {NavLink} from "react-router-dom";
import useRouter from "use-react-router";
import axios from "axios";
import useInput from "../hooks/useInput";
import useOnEnter from "../hooks/useOnEnter";
import useTodos, {newTodo} from "../reducers/useTodos";
import TodoItem from "./TodoItem";
import Input from "./input";

export default function TodoList() {
    const router = useRouter();

    const [todos, {addTodo, deleteTodo, setDone, setListTodo}] = useTodos();
    useEffect(() => {
        const getListTodo = async () => {
            const result = await axios({
                method: "post",
                url: `${process.env.API_URL}/todos`,
                data: {
                    completed:
                        router.match.params.filter === "active"
                            ? false
                            : router.match.params.filter === "completed"
                            ? true
                            : undefined
                }
            });
            setListTodo(result.data);
        };
        getListTodo();
    }, [router.match.params]);
    const left = useMemo(() => todos.reduce((p, c) => p + (c.done ? 0 : 1), 0), [
        todos
    ]);


    const visibleTodos = useMemo(
        () => {
            console.log(todos);
            return router.match.params.filter
                ? todos.filter(i =>
                    router.match.params.filter === "active" ? !i.done : i.done
                )
                : todos
        }
        ,
        [todos, router.match.params.filter]
    );

    const anyDone = useMemo(() => {
        return todos.some(i => i.done);
    }, [todos]);
    const allSelected = useMemo(() => {
        console.log(visibleTodos);
        return visibleTodos.every(i => i.done)
    }, [
        visibleTodos
    ]);

    const onToggleAll = useCallback(() => {
        visibleTodos.forEach(i => setDone(i.id, !allSelected));
    }, [allSelected]);

    const onClearCompleted = useCallback(async () => {
        const result = await axios({
            method: "post",
            url: `${process.env.API_URL}/clearCompleted`
        });
        if (result.data.result) {
            todos.forEach(i => {
                if (i.done) {
                    deleteTodo(i.id);
                }
            });
        }
    }, [todos]);

    const [newValue, onNewValueChange, setNewValue] = useInput();
    const onAddTodo = useOnEnter(async () => {
        if (newValue) {
            const todoNew = newTodo(newValue);
            try {
                const response = await axios({
                    method: "post",
                    url: `${process.env.API_URL}/createTodo`,
                    data: todoNew
                });
                if (response.status === 200) {
                    addTodo(response.data);
                }
                setNewValue("");
            } catch (err) {
                console.log(err);
            }
        }
    }, [newValue]);

    return (
        <React.Fragment>
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onKeyPress={onAddTodo}
                    value={newValue}
                    onChange={onNewValueChange}
                />
            </header>

            <section className="main">
                <Input allSelected={allSelected} onToggleAll={onToggleAll}/>
                {/*<input*/}
                {/*    id="toggle-all"*/}
                {/*    type="checkbox"*/}
                {/*    className="toggle-all"*/}
                {/*    checked={allSelected}*/}
                {/*    onChange={onToggleAll}*/}
                {/*/>*/}
                <label htmlFor="toggle-all"/>
                <ul className="todo-list">
                    {visibleTodos.map(todo => (
                        <TodoItem key={todo.id} todo={todo}/>
                    ))}
                </ul>
            </section>

            <footer className="footer">
        <span className="todo-count">
          <strong>{left}</strong> items left
        </span>
                <ul className="filters">
                    <li>
                        <NavLink exact={true} to="/" activeClassName="selected">
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/active" activeClassName="selected">
                            Active
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed" activeClassName="selected">
                            Completed
                        </NavLink>
                    </li>
                </ul>
                {anyDone && (
                    <button className="clear-completed" onClick={onClearCompleted}>
                        Clear completed
                    </button>
                )}
            </footer>
        </React.Fragment>
    );
}


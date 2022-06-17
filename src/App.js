import React, { useEffect, useState } from 'react';
import "./app.css";
import List from './List';
import Aos from 'aos';
import "aos/dist/aos.css"

const App = () => {
    const [show, setShow] = useState(true)
    const [text, setText] = useState("")
    const [todo, setTodo] = useState([])
    const [id, setid] = useState(0)
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleclick = () => {
        const item = {
            title: text,
            done: false
        }
        setTodo(prevtodo => {
            return [...prevtodo, item];
        });
        setText("");
        console.log(todo);
    }

    function handledelete(id) {
        console.log('clicked delete' + id);
        setTodo(prevtodo => {
            return prevtodo.filter((todo, index) => {
                return index !== id
            })
        });
    }

    const handleEdit = (id) => {
        console.log('clicked edit' + id);

        const item = todo.find((element, index) => {
            return index === id
        })
        console.log(item);
        setText(item.title);
        setid(id)
        setShow(false)
    }

    const handleUpdate = () => {
        setTodo(prevtodo => {
            prevtodo[id].title = text;
            return [...prevtodo];
        });
        setShow(true);
        setText("");
    }

    const handleFalse = (id) => {
        setTodo(prevtodo => {
            prevtodo[id].done = true;
            return [...prevtodo];
        });
        // console.log(todo);
    }
    const handleTrue = (id) => {
        setTodo(prevtodo => {
            prevtodo[id].done = false;
            return [...prevtodo];
        });
        // console.log(todo);
    }
    return (<>
        <div className='container' data-aos="zoom-in">
            <div className='bg'>
            </div>
        </div>
        <div className='todoBox' data-aos="fade-down">
            <h1>TODO</h1>
            <input
                data-aos="fade-right"
                className='inputbox'
                name='title'
                type="text"
                value={text}
                onChange={handleChange}
            />
            {show ? <i id='add' className="fa-solid fa-plus add" onClick={handleclick}></i> :
                <i className="fa-solid fa-pen-to-square add" onClick={handleUpdate}></i>
            }

            <div data-aos="fade-left" className='content'>
                <h3>Incomplete</h3>
                {todo.map((element, index) => {
                    if (element.done === false) {
                        return (
                            <List
                                key={index}
                                id={index}
                                item={element.title}
                                onDelete={handledelete}
                                onEdit={handleEdit}
                                onCheck={handleFalse}
                            />)
                    }
                })}
                <h3>Complete</h3>
                {todo.map((element, index) => {
                    if (element.done === true) {
                        return (
                            <List
                                key={index}
                                id={index}
                                item={element.title}
                                onDelete={handledelete}
                                onEdit={handleEdit}
                                onCheck={handleTrue}
                            />)
                    }
                })}
            </div>
        </div></>
    )
}

export default App
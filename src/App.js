import React, { useEffect, useState } from 'react';
import "./app.css";
import List from './List';
import Aos from 'aos';
import "aos/dist/aos.css"

const App = () => {
    const [show, setShow] = useState(true)
    const [text, setText] = useState('')
    const [list, setList] = useState([])
    const [id, setid] = useState(0)
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    const handleChange = (event) => {
        setText(event.target.value);
    }
    
    const handleclick = () => {
        setList(prevlist => {
            return [...prevlist, text]
        });
        setText("");
    }

    function handledelete(id){
        console.log('clicked delete'+ id);
        setList(prevlist => {
            return prevlist.filter((list,index) => {
                return index !== id
            })
        });
    }

    const handleEdit = (id) =>{
        console.log('clicked edit'+ id);
       
        const item = list.find((element,index)=>{
            return index===id
        })
        console.log(item);
        setText(item);
        setid(id)
        setShow(false)
    }

    const handleUpdate = ()=>{
        setList(prevlist => {
            prevlist[id]=text;
        return [...prevlist];
        });
        setShow(true);
        setText("");
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
                type="text"
                value={text}
                onChange={handleChange}
            />
            {show ? <i id='add' className="fa-solid fa-plus add" onClick={handleclick}></i>:
            <i className="fa-solid fa-pen-to-square add" onClick={handleUpdate}></i>
            }
            
            <div data-aos="fade-left" className='content'>
                {list.map((element, index) => {
                    return (
                        <List
                        key = {index}
                        id={index}
                        item = {element}
                        onDelete = {handledelete}
                        onEdit = {handleEdit}
                        />)
                })}

            </div>
        </div></>
    )
}

export default App
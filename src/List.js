import React from 'react'

const List = (props) => {

    function handleClickDelete(){
        props.onDelete(props.id)
    }
    function handleClickEdit(){
        props.onEdit(props.id)
    }
    function handleChecked(){
        props.onCheck(props.id)
    }

    return (
        <div className='list' data-aos="flip-up">
            <input type="checkbox" onClick={handleChecked} />
            <p>{props.item}</p>
            <div>
                <i style={{ color: "#50c870", padding: "3px", cursor: "pointer" }} 
                className="fa-solid fa-pen-to-square fa-lg"
                onClick={handleClickEdit}
                ></i>
                <i style={{ color: "#df3c3c", padding: "3px", cursor: "pointer" }} 
                className="fa-solid fa-trash-can fa-lg"
                onClick={handleClickDelete}
                ></i>
            </div>
        </div>
    )
}

export default List
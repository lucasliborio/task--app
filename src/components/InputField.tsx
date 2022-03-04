import React, { useRef } from "react";
import './style.css'

interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent) => void;
    onModify:(e:React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField = (props:Props) =>{

    const inputRef = useRef<HTMLInputElement>(null)
    return(
        <div>
            <form  className="input" onSubmit={e => {props.handleAdd(e); inputRef.current?.blur()} }>
                <input ref={inputRef} className="input__box" value={props.todo} onChange={props.onModify} type="input" placeholder="Tell me a task" />
                <button className="input_submit "type="submit"> Add</button>
            </form>
        </div>
    )
}

export default InputField
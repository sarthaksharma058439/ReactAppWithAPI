const Elements = {
    "label": <label></label>,
    "textarea":<input></input>,
    "textbox":<textarea></textarea>,
    "button":<button className='border-solid border-2 border-black px-2 py-1 rounded-lg bg-blue-400' type='button'>Submit</button>,
    "div":<div></div>
}

export default function createElement(type,data=null){
    return Elements[type]
}
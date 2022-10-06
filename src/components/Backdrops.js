function Backdrop(prop) { 
    return <div className='backdrop' onClick={prop.onCancle} /> // self-closing tag
}

export default Backdrop;
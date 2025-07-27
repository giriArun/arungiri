export default function Button({ classes, text, type, style, onClick, icon }) {
    const alertMissingHandler = () => window.alert("Add event handler to the Button!");
    
    return (
        <button type={type} className={`btn ${classes}`} style={style} onClick={onClick ? onClick : alertMissingHandler}>
            <div className='d-flex justify-content-center'>
                {icon}
                {text ? text : "Click Me"}
            </div>
        </button>
    );
}

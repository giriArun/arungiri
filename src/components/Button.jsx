export default function Button(
    {
        classes,
        endIcon,
        id,
        onClick,
        startIcon,
        text,
        type,
        isDisabled = false
    }
) {
    const alertMissingHandler = () => window.alert("Attach an event handler to the Button!");

    return (
        <button
            type={type ? type : "button"}
            className={`btn ${classes ? classes : "btn-primary"}`}
            id={id}
            disabled={isDisabled}
            onClick={onClick ? onClick : alertMissingHandler}
        >
            {startIcon}
            {text ? text : "Click Me"}
            {endIcon}
        </button>
    );
}

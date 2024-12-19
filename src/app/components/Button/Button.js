const Button = ({ label }) => {
    return (
        <div>
            <h1 className="text-[--primary] rounded-[12px]">{label}</h1>
            <h1 className="text-[--secondary] rounded-[12px]">{label}</h1>
            <h1 className="text-[--tertiary] rounded-[12px]">{label}</h1>
        </div>
    );
}

export default Button;
export default ({ label, name, type = 'input', accept, onChange }) => {
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                name={name}
                accept={accept}
                onChange={onChange}
            />
        </>
    );
};

export default ({ label, name, type = 'input', accept, onChange }) => {
    return (
        label && (
            <label>
                {label}
                <input
                    type={type}
                    name={name}
                    accept={accept}
                    onChange={onChange}
                />
            </label>
        )
    );
};

import PropTypes from 'prop-types';

const Input = ({state, changeState, name, type, placeholder, required, label}) => {
    const handleChange = (e) => {
        changeState({...state, [e.target.name]: e.target.value});
    }
    return (
        <div className="flex flex-col">
            <label htmlFor="first_name" className="self-start block mb-2 text-[12px] font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                onChange={handleChange}
                value={state[name]}
                name={name}
                type={type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder} required={required}/>
        </div>
)
    ;
};

export default Input;

Input.propTypes = {
    state: PropTypes.object,
    changeState: PropTypes.func,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
}
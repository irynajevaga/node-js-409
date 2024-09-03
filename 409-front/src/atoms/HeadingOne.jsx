import PropTypes from "prop-types";

const HeadingOne = ({text}) => {
    return (
        <h1 className="text-4xl font-bold leading-tight">
            {text}
        </h1>
    );
};

export default HeadingOne;

HeadingOne.propTypes = {
    text: PropTypes.string.isRequired,
}
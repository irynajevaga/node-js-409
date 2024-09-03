import PropTypes from "prop-types";

const ListItem = ({children}) => {
    return (
        <li>
            {children}
        </li>
    );
};

export default ListItem;
ListItem.propTypes = {
    children: PropTypes.node.isRequired,
}
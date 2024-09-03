import ListItem from "./ListItem.jsx";
import PropTypes from "prop-types";

const UnorderList = ({data}) => {
    return (
        <ul className="mt-10">
            {data.length > 0 ? data.map((item, index) => <ListItem key={item + index}>{item}</ListItem>) : <ListItem>No Friends - No Rum</ListItem>}
        </ul>
    );
};

export default UnorderList;
UnorderList.propTypes = {
    data: PropTypes.array.isRequired,
}
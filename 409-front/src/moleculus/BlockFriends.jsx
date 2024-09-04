import Form from "./Form.jsx";
import HeadingOne from "../atoms/HeadingOne.jsx";
import hat from "../assets/pirate_hat.png"
import UnorderList from "../atoms/UnorderList.jsx";
import {useEffect, useState} from "react";

const BlockFriends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/")
            .then(res => res.json())
            .then((data) => {setFriends(data)}) // [{},{},{},{}]
            .catch((err) => console.log(err));
    }, [])
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <img className='w-1/2' src={hat} alt="Hat"/>
            <HeadingOne text="Pirates Lists"/>
            <Form/>
            <UnorderList data={friends}/>
        </div>
    );
};

export default BlockFriends;
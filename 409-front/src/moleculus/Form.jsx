import Input from "../atoms/Input.jsx";
import {useState} from "react";

const Form = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('eeep')
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 min-w-80 mt-5">
            <Input name="name" placeholder="Jack Sparrow" state={user}  changeState={setUser} type='text'  label="User name"/>
            <Input name="email" placeholder="Jack@blackpearl.com" state={user}  changeState={setUser} type='email'  label="Email"/>
            <Input name="phone" placeholder="123-456-789" state={user}  changeState={setUser} type='text'  label="Phone Number"/>
            <Input name="address" placeholder="Isla Tortuga" state={user}  changeState={setUser} type='text'  label="User Address"/>
            <Input name="password" placeholder="cptMorganWhiteRum" state={user}  changeState={setUser} type='password'  label="User Password"/>
            <input className="border py-1.5 rounded mt-4 active:mt-3 cursor-pointer" type="submit" value="Submit"/>
        </form>
    );
};

export default Form;
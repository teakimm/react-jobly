import { useContext } from "react";
import userContext from "./userContext";

function LoginPage() {
    const { user } = useContext(userContext);
    console.log(user);
    return (
        <div>test</div>
    );
}

export default LoginPage;
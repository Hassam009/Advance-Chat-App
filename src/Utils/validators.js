import { isValidUsername} from "6pp";


export const validateUsername = (username) => {
    if (!isValidUsername(username)) {
       return { isValid: false, message: "Username is invalid" };
    }
    if (username.includes(" ")) {
       return { isValid: false, message: "Username cannot contain spaces" };
    }
    return { isValid: true, message: "" };
}

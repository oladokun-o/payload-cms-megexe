import { Access } from "payload";


const authenticated: Access = ({ req: { user } }) => {
    if (user) {
        return true;
    }
    return false;
};

export default authenticated;
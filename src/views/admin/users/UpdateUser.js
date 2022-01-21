import { store } from "store/store";
import { toggleSidebar, updateUser } from "store/actions";

export const handleSingleUserUpdation = (value) => {
    store.dispatch(toggleSidebar(false));
    store.dispatch(updateUser(value));
};

export const generateUpdateInputs = () => {
    const inputs = [
        {
            name: "username",
            label: "UserName",
            type: "text",
            visibility: true,
        },
        {
            name: "id",
            label: "id",
            type: "text",
            visibility: false,
        },
        {
            name: "email",
            label: "email",
            type: "text",
            visibility: false,
        },
    ];
    return inputs;
};

export const initialUserValues = (data)=>{
    return{
    username: data?.username,
    email: data?.email,
    id:data?._id,
    }
};

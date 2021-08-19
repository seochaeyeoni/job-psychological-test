import { atom } from "recoil";

const userState = atom({
    key: "userState",
    default: {
        name: "",
        gender: "",
        createdAt: ""
    }
});

export default userState;
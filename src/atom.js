import { atom } from "recoil";

const userState = atom({
    key: "userState",
    default: {
        name: "",
        gender: "",
        createdAt: ""
    }
});

export const questionState = atom({
    key: "questionState",
    default: [{
        question: "",
        answer01: "",
        answer02: "",
        answerScore01: "",
        answerScore02: ""

    },]
})

export default userState;
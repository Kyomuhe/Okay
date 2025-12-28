import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName:"",
    email:"",
    password:"",
    speciality:"",
    proffessionalDetails:"",
    problem:"",
    userDetails:"",
    accountType:"",
    userName:"",

}
const RegisterSlice = createSlice({
    name:"register",
    initialState:initialState,
    reducers:{
        setFirstName:(state, action) =>{
            state.firstName = action.payload;
        },
        setLastName:(state, action) =>{
            state.lastName = action.payload;
        },
        setEmail:(state, action) =>{
            state.email = action.payload;
        },
        setPassword:(state, action) =>{
            state.password = action.payload;
        },
        setSpeciality:(state, action) =>{
            state.speciality = action.payload;
        },
        setProfessionalDetails:(state, action)=>{
            state.proffessionalDetails = action.payload;
        },
        setProblem:(state, action)=>{
            state.problem = action.payload;
        },
        setUserDetails:(state, action)=>{
            state.userDetails = action.payload;
        },
        setAccountType:(state, action)=>{
            state.accountType = action.payload;
        },
        setUserName:(state, action)=>{
            state.userName = action.payload;
        },
        resetRegistration:()=>{
            return initialState;
        }
    }
})
export const {setFirstName, setLastName,setUserDetails, setUserName,setEmail, setPassword,
     setAccountType, setSpeciality, setProfessionalDetails, resetRegistration, setProblem} = RegisterSlice.actions;
export default RegisterSlice.reducer;
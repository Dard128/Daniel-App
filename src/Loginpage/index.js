import styled from "styled-components";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    background-color: blue;
`;

const wlecomeTitle = styled.h1`
    color: black;
    font-size: 40px;
`;

const Label = styled.label`
    font-size: 20px;
`;

const Left = styled.h1`
    font-size: 10px;
    width:50%;
    color: blue;
    text-align: center;
    margin-top: 20px;
    backgrounf-color: White;
`;

const Right = styled.div`
    height:100%;
    width:50%;
    background-image: url("https://i.pinimg.com/originals/4b/39/a9/4b39a94252cddcc7d20326c140278c4e.png");
`;

const LabelWrapper = styled.label`
    disply: flex;
    margin-top:100px;
    flx-direction: row;
    justify-content: center;
`;

const Input = styled.input`
    font-size: 10px;
    width:50%;
    color: blue;
    text-align: center;
    margin-top: 20px;
    backgrounf-color: White;
`;

const loginButton = styled.button`
    font-size: 10px;
    width:50%;
    color: blue;
    text-align: center;
    margin-top: 20px;
    backgrounf-color: White;
`;


function Loginpage(){
    const history = useHistory();

    const {user, setUser} = useState({
        id: "",
        password: "",
});//this is empty because user should put the id & password in

    const {id, password} = user;

    const navigateToMainPage = () => {

        if (id == "" && password ==""){
            alert("ID or Password is empty");
            return;
        }

        if (id == "DMoon" && password =="1234"){
            history.push("/main");
        }
    };
    
    const putUserInfo = (e) => {
        const {name, value} = e.target;
        console.log(name);
        console.log(value);
        setUser({
            ...value,
            [name]:value,
        });
        console.log(user);
    };


    return(
        <Container>
            <Left>
                <wlecomeTitle>Welcome</wlecomeTitle>
                <labelWrapper>
                    <Label>ID</Label>
                    <Input
                        type="text"
                        value={id}
                        name ="id" 
                        onChange={putUserInfo}
                    ></Input>
                </labelWrapper>
                <labelWrapper>
                    <Label>Password</Label>
                    <Input 
                    type = "password"
                    value={password}
                    name="password"
                    onChange={putUserInfo}></Input>
                </labelWrapper>
                <Loginpage onClick={navigateToMainPage}></Loginpage>
            </Left>
            <Right></Right> 
        </Container>
    )
    
}

export default Loginpage;
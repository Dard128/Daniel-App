import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    background-color: grey;
    display: flex;
`;

const LabelWrapper = styled.label`
`;

const Label = styled.label`
    font-size: 60px;
    margin-top: 100px;
    margin-left: 500px;
    justify-contect: center;
`;

const Info = styled.div`
    font-size: 40px;
    margin-top: 50px;
    margin-left: 500px;
    justify-contect: center;
`;

const Info2 = styled.div`
    font-size: 20px;
    margin-top: 50px;
    margin-left: 500px;
    justify-contect: center;
`;

const Info3 = styled.div`
    font-size: 20px;
    margin-top: 50px;
    margin-left: 500px;
    justify-contect: center;
    flex-direction: column;
`;


function Mainpage(){
    return(
        <Container>
            <LabelWrapper>
                <Label>About Me</Label>
                <Info>My name is Daniel, I am G10 I'm born in Korea. </Info>
                <Info2>When I start learning web development,
                     it was quite hard. But after under standing, it became lot more easier.</Info2>
                
                <Info3>Name:Daniel Moon</Info3>
                <Info3>Email:2024danielmoon@usbccollegiate.org</Info3>
                <Info3>Phone:010-8699-4767</Info3>
                <Info3>Date of birth:12/08/2005</Info3>


            </LabelWrapper>
        </Container>
    )
    
}
export default Mainpage;


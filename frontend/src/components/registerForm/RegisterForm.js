import React, { useState } from "react";
import styled from "styled-components";


const RegisterForm = () => {
  const [status, setStatus] = useState("Register");
  const [sentMessage, setSentMessage] = useState(false);

  const [is_checked, setSmsNotification] = useState(false);

  
  const handleSmsNotification = () => {
    setSmsNotification(!is_checked);
    console.log(is_checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Registering...");
    const { name, email, phone, city, cityArea, password } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      city: city.value,
      cityArea: cityArea.value,
      password: password.value,
      is_checked,
    };

    console.log(details);
    let response = await fetch(
      `http://localhost:5000/register`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );

    setStatus("Submit");
    let result = await response.json();
    setSentMessage(result.status);
  };
  return (
    <SendMessageWrapper>
      {sentMessage ? (
        <div>
          {sentMessage === "SENT" && (
            <p>THANK YOU! WE'LL GET BACK TO YOU ASAP</p>
          )}
          {sentMessage === "ERROR" && (
            <p>SOMETHING WENT WRONG. TRY AGAIN PLEASE</p>
          )}
          <button onClick={() => setSentMessage(false)}>
            sent another message
          </button>
        </div>
      ) : (
        
        <FormWrapper onSubmit={handleSubmit}>
          <h2>Sign Up</h2>            
          <input type="text" id="name" placeholder="Name" required />           
          <input type="email" id="email" placeholder="Email" required />       
          <input type="text" id="password" placeholder="Password" required />       
          <input type="text" id="city" placeholder="City" required />            
          <input type="text" id="cityArea" placeholder="City area" /> 
          <input type="phone" id="phone" placeholder="Phone" required />            
          <Checkbox>
            <input type="checkbox" id="check1" onChange={handleSmsNotification} />
            <label htmlFor="check1">
              Agree to receive SMS notifications about new events{" "}
            </label>
          </Checkbox>
                 

          <button type="submit">{status}</button>
        </FormWrapper>        
      )}
    </SendMessageWrapper>
  );
};

export default RegisterForm;

// const Pr = styled.div`
// height: 20px;
// background-color: yellow;
// text-align: center;
// `
const SendMessageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: right;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  padding: 10%;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
    padding: 0 10px;
  }  

  button {    
    width: 100%;
    margin-bottom: 40px;
    height: 30px;
    font-size: 1rem;
    border: 1px solid #7DC81F;
    border-radius: 25px;
    background-color: #7DC81F;
  }
`;

const Checkbox = styled.div`  
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin-bottom: 20px;

  input {
    padding: 0;
    margin: 0 20px 0 0;
    width: 25px;
  }

  label {
    font-size: 0.8rem;
  }
  
`

// const NameSection = styled.div`
//   input {
//     width: 300px;
//     border: 0;
//     margin: 15px;
//     border-bottom: 1px solid black;
//   }
// `;

// const Email = styled.div`
//   input {
//     width: 300px;
//     border: 0;
//     margin: 15px;
//     border-bottom: 1px solid black;
//   }
// `;

// const Topic = styled.div`
//   select {
//     width: 300px;
//     border: 0;
//     margin: 15px;
//     border-bottom: 1px solid black;
//   }
// `;

// const Message = styled.div`
//   textarea {
//     width: 300px;
//     height: 100px;
//     margin: 0 15px;
//   }
// `;

// const SendMessageButton = styled.button`
// font-size: ${({ Initial }) => Initial ? '50px': '20px'}
// `;

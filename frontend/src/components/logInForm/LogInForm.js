import React, { useState } from "react";
import styled from "styled-components";

const LogInForm = () => {
  const [status, setStatus] = useState("Log In");
  const [sentMessage, setSentMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");
    const { email, password } = e.target.elements;

    let details = {
      email: email.value,
      password: password.value,
    };

    console.log(details);
    let response = await fetch(
      `http://localhost:5000/auth`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      }
    );

    setStatus("Log In");
    let result = await response.json();
    setSentMessage(result.status);
  };
  return (
    <SendMessageWrapper>
      {sentMessage ? (
        <div>
          {sentMessage === "SENT" && <p>HERE WE SEE MAIN MAP SECTION</p>}
          {sentMessage === "ERROR" && <p>SOMETHING WENT WRONG</p>}
          <button onClick={() => setSentMessage(false)}>
            TRY AGAIN PLEASE
          </button>
        </div>
      ) : (
        
        <FormWrapper onSubmit={handleSubmit}>
          <h2>Log In</h2>           
          <input type="email" id="email" placeholder="Email" required />           
          <input type="text" id="password" placeholder="Password" required />
          <button type="submit">{status}</button>
        </FormWrapper>
        
      )}
    </SendMessageWrapper>
  );
};

export default LogInForm;

// const Pr = styled.div`
// height: 20px;
// background-color: yellow;
// text-align: center;
// `
const SendMessageWrapper = styled.div`
  /* width: 100vh; */
  /* height: auto; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10%;
  /* background-color: lightgray; */
`;

const FormWrapper = styled.form`
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

const Topic = styled.div`
  select {
    width: 300px;
    border: 0;
    margin: 15px;
    border-bottom: 1px solid black;
  }
`;

const Message = styled.div`
  textarea {
    width: 300px;
    height: 100px;
    margin: 0 15px;
  }
`;

// const SendMessageButton = styled.button`
// font-size: ${({ Initial }) => Initial ? '50px': '20px'}
// `;

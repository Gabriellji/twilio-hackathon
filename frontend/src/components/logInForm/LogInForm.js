import React, { useState } from "react";
import styled from "styled-components";

const LogInForm = () => {
  const [status, setStatus] = useState("LOG IN");
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
    // let response = await fetch(
    //   `http://localhost:5000/auth`,

    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify(details),
    //   }
    // );

    // setStatus("LOG IN");
    // let result = await response.json();
    // setSentMessage(result.status);
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
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <h2>LOG IN</h2>

            <Email>
              <input type="email" id="email" placeholder="email" required />
            </Email>

            <NameSection>
              <input
                type="text"
                id="password"
                placeholder="password"
                required
              />
            </NameSection>

            <button type="submit">{status}</button>
          </form>
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
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  align-items: center;
  width: 60%;
  border-radius: 10px;
  background-color: white;

  button {
    width: 30%;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
  }
`;

const NameSection = styled.div`
  input {
    width: 300px;
    border: 0;
    margin: 15px;
    border-bottom: 1px solid black;
  }
`;

const Email = styled.div`
  input {
    width: 300px;
    border: 0;
    margin: 15px;
    border-bottom: 1px solid black;
  }
`;

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

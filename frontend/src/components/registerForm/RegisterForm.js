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
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <h2>REGISTER</h2>
            <NameSection>
              <input type="text" id="name" placeholder="Name" required />
            </NameSection>
            <Email>
              <input type="email" id="email" placeholder="Email" required />
            </Email>

            <NameSection>
              <input
                type="text"
                id="password"
                placeholder="Password"
                required
              />
            </NameSection>

            <NameSection>
              <input type="text" id="city" placeholder="City" required />
            </NameSection>
            <NameSection>
              <input type="text" id="cityArea" placeholder="City area" />
            </NameSection>

            <NameSection>
              <input type="phone" id="phone" placeholder="Phone" required />
            </NameSection>
            <NameSection>
              <input
                type="checkbox"
                id="check1"
                onChange={handleSmsNotification}
              />
              <label htmlFor="check1">
                Agree to receive SMS notifications about new events{" "}
              </label>
            </NameSection>

            <button type="submit">{status}</button>
          </form>
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

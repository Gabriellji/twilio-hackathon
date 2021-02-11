import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/ContextProvider";

const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(219, 250, 246, 1) 0%,
    rgba(35, 118, 205, 1) 100%
  );

  &:after {
    content: "";
    background: white;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-attachment: scroll;
    opacity: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -2;
  }

  button {
    width: 55%;
    height: 7%;
    border: 2px solid white;
    background-color: #7dc81f;
    position: relative;
    top: 10%;
    border-radius: 15px;
    color: white;
    font-family: "Nunito", sans-serif;
    font-size: 1.8rem;
    box-shadow: 3px 3px 5px grey;
  }
`;

const TitleContainer = styled.div`
  width: 60%;
  height: 10%;
  border: 3px solid #7dc81f;
  position: relative;
  top: 5%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PageTitle = styled.div`
  position: relative;
  align-items: center;
  padding: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 2.3rem;
  color: white;
`;
const MyEventsListContainer = styled.section`
  position: relative;
  width: 90%;
  height: 50%;
  box-shadow: 0px 0px 10px 5px black;
  border-radius: 15px;
  position: relative;
  background: rgb(149, 149, 149);
  background: linear-gradient(
    0deg,
    rgba(149, 149, 149, 1) 0%,
    rgba(251, 251, 251, 1) 100%
  );
  top: 10%;
  opacity: 0.1;
`;
const MyEventList = styled.article`
  position: relative;
  top: -35%;
  opacity: 1;
  z-index: 2;
`;

const initialState = {
  items: {},
  isLoaded: false,
};

const MyEvents = () => {
  const userLocalStorage = localStorage.getItem("userScore");
  const context = useContext(MyContext);
  const [state, setState] = useState(initialState);
  console.log(context);

  useEffect(() => {
    fetch(`http://localhost:5000/event/my_events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userLocalStorage,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setState({
          isLoaded: true,
          items: json,
        });
      });
  }, []);

  return (
    <MainContainer>
      {!state.isLoaded ? (
        <div>Almost there...</div>
      ) : (
        <>
          <TitleContainer>
            <PageTitle>
              <p>My events</p>
            </PageTitle>
          </TitleContainer>
          <MyEventsListContainer />
          <MyEventList>
            {state.items.map((item) => (
              <>
                <p>{item.what_to_bring}</p>
              </>
            ))}
          </MyEventList>
          <button>
            <Link to="/mapSection">Back to map</Link>
          </button>
        </>
      )}
    </MainContainer>
  );
};
export default MyEvents;

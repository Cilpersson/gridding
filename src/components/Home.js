import React from "react";
import styled from "styled-components";
import moment from "moment";
import background from "./pattern.svg";
import Lottie from "lottie-react-web";
import animation from "./newborn.json";

export const Home = () => {
  return (
    <Section>
      <BabySection>
        <Title>Ingrid Ellen Carina Stjernholm</Title>
        <br />
        <Lottie
          options={{
            animationData: animation,
          }}
          height="150px"
          width="150px"
        />
        <br />
        <BabyInfo>
          <Text>
            <Point ariaLabel="baby">👶🏼 </Point>Born on the 30th of December 2019
            at 12:14pm, that's about {moment("20191230", "YYYYMMDD").fromNow()}{" "}
            <Span ariaLabel="watch">⏰</Span>
          </Text>
          <br />
          <br />
          <Text>
            <Point ariaLabel="baby">👶🏼 </Point>She was 51cm from her head to her
            toes and weighed 3404 grams <Span ariaLabel="ruler">📏</Span>
          </Text>
          <br />
          <br />
          <Text>
            <Point ariaLabel="baby">👶🏼 </Point>The first thing she ate was a
            tiny piece of <SpanBack ariaLabel="banana">🍌</SpanBack>
          </Text>
        </BabyInfo>
      </BabySection>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  padding: 20px 0;
  background-image: url(${background});
  background-size: cover;
  box-sizing: border-box;
`;

const BabySection = styled.section`
  width: 75vw;
  padding: 45px 15px 25px;
  background: #f2f7ff;
  border: 8px solid #fb7b77;
  border-radius: 5px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 668px) {
    width: 95%;
  }
`;

const BabyInfo = styled.section`
  max-width: 750px;
  text-align: left;
`;

const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 60px;
  color: #805333;
  text-align: center;
  margin: 0;

  @media (max-width: 668px) {
    font-size: 30px;
  }
`;

const Text = styled.span`
  font-family: "Quicksand", sans-serif;
  font-size: 30px;
  color: #543722;

  @media (max-width: 668px) {
    font-size: 20px;
  }
`;

const SpanBack = styled.span.attrs(({ ariaLabel }) => ({
  role: "img",
  "aria-label": ariaLabel,
}))`
  font-size: 30px;
  transform: scaleX(-1);
  display: inline-block;

  @media (max-width: 668px) {
    font-size: 20px;
  }
`;

const Span = styled.span.attrs(({ ariaLabel }) => ({
  role: "img",
  "aria-label": ariaLabel,
}))`
  font-size: 30px;

  @media (max-width: 668px) {
    font-size: 20px;
  }
`;

const Point = styled.span.attrs(({ ariaLabel }) => ({
  role: "img",
  "aria-label": ariaLabel,
}))`
  font-size: 30px;
  margin-right: 10px;

  @media (max-width: 668px) {
    font-size: 20px;
  }
`;

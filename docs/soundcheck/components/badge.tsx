import React from "react";
import styled from "styled-components";

const StyledBadge = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border-width: 2px;
  font-weight: 700;
  width: 48px;
  height: 48px;
  font-size: 22;
  border-style: solid;
  background: rgb(255, 193, 33);
  margin-right: 16px;
  margin-bottom: 16px;
  &:after {
    position: absolute;
    display: block;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 -0.18em 0 0 rgba(0, 0, 0, 0.25),
      inset 0px 0.18em 0px 0px rgba(255, 255, 255, 0.5),
      inset 0px 1.3em 0px -0.5em rgba(255, 255, 255, 0.2);
  }
`;

export const Badge = ({ background, label }) => (
  <StyledBadge role="img" aria-label={`${label} badge`} style={{ background }}>
    {label}
  </StyledBadge>
);

import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const Checkbox = ({
  checked,
  disabled,
  onChange,
  name,
}: ComponentPropsWithoutRef<"input">) => {
  return (
    <CheckboxContainer>
      <HiddenCheckBox
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCheckBox checked={checked === true}>
        <Icon viewBox="0 0 24 24">
          <polyline points="19 7 10 17 5 12" />
        </Icon>
      </StyledCheckBox>
    </CheckboxContainer>
  );
};

export default Checkbox;

const CheckboxContainer = styled.div`
  display: flex;
  vertical-align: middle;
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

const HiddenCheckBox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

type CheckProps = {
  checked: boolean;
};
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckBox = styled.div<CheckProps>`
  display: inline-block;
  width: 1.2vw;
  height: 1.2vw;
  /* border: ${(props) =>
    props.checked ? "none" : "solid 0.1rem transparent"}; */
  background: ${(props) => (props.checked ? "#d0bd95" : "white")};
  border-radius: 0.4rem;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;
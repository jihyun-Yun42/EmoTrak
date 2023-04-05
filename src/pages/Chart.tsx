import React, { useState } from "react";
import styled from "styled-components";
import BarChart from "../features/chart/components/BarChart";
import PieChart from "../features/chart/components/PieChart";

const Wrapper = styled.div`
  position: relative;
  margin-top: 15px;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-top: 10px;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  margin-top: 10px;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Chart = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const toggleChart = () => setIsActive((prev) => !prev);
  return (
    <Wrapper>
      <CheckBoxWrapper>
        <CheckBox onClick={toggleChart} id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      {isActive ? <PieChart /> : <BarChart />}
    </Wrapper>
  );
};

export default Chart;

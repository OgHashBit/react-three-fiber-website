import React from "react";
import styled from "styled-components";
import { random } from "lodash";
import colorPalette from "@styles/colorPalette";
import { TBox } from "../code";
import { space } from "@styles/spacing";
import { color } from "@styles/colors";
import { fontSize } from "@styles/typography";

let colors = [...colorPalette];
colors.shift();
let spawnXPositions = [6, -6, 12, -12];
const maximumBoxes = 5;

export function StepThree({ boxes, setBoxes }) {
  const shouldRenderAddBox = boxes.length < maximumBoxes;

  const handleClickAddBox = (): void => {
    if (boxes.length === maximumBoxes) return;
    setBoxes([
      ...boxes,
      {
        position: [spawnXPositions.shift(), 0, 0],
        rotationSpeed: random(1, 10),
        color: colors.shift(),
      },
    ]);
  };

  const handleClickChangeX = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const newValue = parseInt(e.target.value);

    const newBoxes = boxes.map((box, j) => {
      if (i === j) {
        return {
          ...box,
          position: [newValue, box.position[1], box.position[2]],
        };
      }

      return { ...box, position: [...box.position] };
    });

    setBoxes(newBoxes);
  };

  const handleClickRotationSpeed = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const newSpeed = e.target.value;

    const newBoxes = boxes.map((box, j) => {
      return i === j ? { ...box, rotationSpeed: newSpeed } : { ...box };
    });

    setBoxes(newBoxes);
  };

  const renderAddBox = (box: TBox, i: number): React.ReactNode => {
    return (
      <Box key={i} color={box.color}>
        {renderPropertyInput("X", box.position[0], (e) =>
          handleClickChangeX(e, i)
        )}
        {renderPropertyInput("S", box.rotationSpeed, (e) =>
          handleClickRotationSpeed(e, i)
        )}
      </Box>
    );
  };

  const renderPropertyInput = (
    label: string,
    value: number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ): React.ReactNode => {
    return (
      <BoxProperty>
        <label>{label}:</label>
        <input type="number" value={value} onChange={onChange}></input>
      </BoxProperty>
    );
  };

  return (
    <div>
      <div>
        Now that we have a reusable component we can render is as often as we
        want.
      </div>
      <BoxWrapper>
        {boxes.map(renderAddBox)}
        {shouldRenderAddBox && <AddBox onClick={handleClickAddBox}>+</AddBox>}
      </BoxWrapper>
    </div>
  );
}

const Box = styled.div<{ color: string }>`
  width: 110px;
  height: 120px;
  background: ${color.lightPrimary};
  margin: ${space.small};
  margin-left: 0;
  border-radius: 10px;
  border: 5px solid ${(props) => props.color};
  color: ${color.darkPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${space.small};
`;

const AddBox = styled.div`
  width: 50px;
  height: 120px;
  font-size: ${fontSize.large};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  margin: ${space.small} 0;
  border-radius: 10px;
  cursor: pointer;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BoxProperty = styled.div`
  display: flex;
  flex-direction: row;

  label {
    padding-right: 5px;
  }

  input {
    margin-bottom: ${space.small};
    width: 50px;
    font-size: ${fontSize.small};
    text-align: right;
  }
`;
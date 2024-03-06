import { useState } from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import ExperimentContainer from "./ExperimentContainer";
import EmptyExperiment from "../EmptyExperiment";

interface TypeButtonProps {
  active: boolean;
}

export const TypeButton = styled.button<TypeButtonProps>`
  border: ${(props) =>
    props.active ? "1px solid #019436" : "1px solid #757575"};
  color: ${(props) => (props.active ? "#019436" : "#6a6a6a")};
  &:hover {
    border: ${(props) =>
    props.active ? "1px solid #019436" : "1px solid #757575"} !important;
    color: ${(props) => (props.active ? "#019436" : "#6a6a6a")} !important;
  }
`;

const Experiment = ({ data }: { data: ExperimentType }) => {
  const [addingIteration, setAddingIteration] = useState<boolean>(false);

  const lock = () => {
    // INFO: update the perticular experiment isLock fields from here
  };

  const addIteration = (titleValue: string) => {
    // INFO: call the redux action to add the experiment value into redux storage
    setAddingIteration(false);
  };

  const reset = () => {
    // INFO: reset the experiment iteration's list from here.
  };

  const handleGenerateTitle = async ({ title, promptText, type }: any) => {
    // INFO: generate the Prompt engineering title from here and based on response trigger the addIteration event. 
  };

  return (
    <Box sx={{ marginTop: "12px" }}>
      <EmptyExperiment isLock={data.isLock}>
        {data.iterations.map((a, index) => {
          return (
            <Box
              key={index}
              sx={{
                background: "#000000",
                padding: "6px 12px",
                borderRadius:
                  index === 0
                    ? "9px 9px 0 0"
                    : data.iterations.length === index + 1
                      ? "0 0 9px 9px"
                      : 0,
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
                gap: "20px",
              }}
            >
              <Typography color="#747575">EM - {index + 1}</Typography>
              <Typography color="#a4a4a4" sx={{ flex: 1, textAlign: "left" }}>
                {a}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "4px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography color="#757675">Selection </Typography>
                <Box
                  width={12}
                  height={12}
                  sx={{ backgroundColor: "green", borderRadius: "10000px" }}
                ></Box>
              </Box>
            </Box>
          );
        })}

        {addingIteration ? (
          <ExperimentContainer onCancelEvent={() => setAddingIteration(false)} onDoneEvent={handleGenerateTitle} />
        ) : (
          <>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <button onClick={lock} style={{ color: "#757575", marginRight: 6 }}>
                {data.isLock ? "UNLOCK" : "LOCK"}
              </button>
              {data.iterations.length > 0 && (
                <button onClick={reset} style={{ color: "#757575", marginRight: 6 }}>
                  RESET
                </button>
              )}
              <button onClick={() => setAddingIteration(true)}>
                + ADD ITERATION
              </button>
            </Box>
          </>
        )}
      </EmptyExperiment>
    </Box>
  );
};

export default Experiment;

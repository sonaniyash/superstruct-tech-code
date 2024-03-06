import { useState } from "react";
import { Box } from "@mui/material";
import EmptyExperiment from "../EmptyExperiment";
import { TypeButton } from ".";

import './styles.css';

const ExperimentContainer = ({ onDoneEvent, onCancelEvent, isEmptyExperiment = false }: any) => {
    const [title, setTitle] = useState<string>("");
    const [promptText, setPromptText] = useState<string>("");
    const [type, setType] = useState<"small" | "medium" | "large">("small");

    const handleCompleteExperiment = async () => {
        onDoneEvent({
            promptText,
            title,
            type
        });
    };

    return (
        <div>
            {isEmptyExperiment ? (
                <EmptyExperiment isLock={false}>
                    <Box
                        sx={{
                            backgroundColor: "#000000",
                            borderRadius: "4px",
                            padding: "4px 8px",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            color: "#5f5f5f",
                            gap: "20px",
                            fontSize: "smaller",
                        }}
                    >
                        EM - 1{" "}
                        <input
                            type="text"
                            placeholder="Adding iteration ...."
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            style={{ color: '#ffffff' }}
                        />
                    </Box>

                    {promptText.length > 4 && (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                    marginTop: "10px",
                                    gap: "10px",
                                }}
                            >
                                <TypeButton
                                    active={type === "small"}
                                    onClick={() => setType("small")}
                                >
                                    SHORT
                                </TypeButton>
                                <TypeButton
                                    active={type === "medium"}
                                    onClick={() => setType("medium")}
                                >
                                    MEDIUM LENGTH
                                </TypeButton>
                            </Box>
                            <Box sx={{ textAlign: "left", marginTop: "10px" }}>
                                <TypeButton
                                    active={type === "large"}
                                    onClick={() => setType("large")}
                                >
                                    VERY VERY VERY LONG (UP TO 35 CHAR)
                                </TypeButton>
                            </Box>
                        </>
                    )}

                    <Box
                        sx={{
                            marginTop: "10px",
                            color: "#5f5f5f",
                            backgroundColor: "#000000",
                            borderRadius: "4px",
                            padding: "4px 8px",
                        }}
                    >
                        <textarea
                            placeholder="To add a new iteration, start typing a prompt or generate one"
                            className="text-area-prompt"
                            value={promptText}
                            onChange={(data) => setPromptText(data.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "end", marginTop: '8px' }}>
                        <button onClick={onCancelEvent} className="btn-right-margin">CANCEL</button>
                        <button onClick={handleCompleteExperiment}>DONE</button>
                    </Box>
                </EmptyExperiment>
            ) : (
                <>
                    <Box
                        sx={{
                            backgroundColor: "#000000",
                            borderRadius: "4px",
                            padding: "4px 8px",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            color: "#5f5f5f",
                            gap: "20px",
                            fontSize: "smaller",
                        }}
                    >
                        EM - 1{" "}
                        <input
                            type="text"
                            placeholder="Adding iteration ...."
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            className="input-title"
                        />
                    </Box>

                    {promptText.length > 4 && (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                    marginTop: "10px",
                                    gap: "10px",
                                }}
                            >
                                <TypeButton
                                    active={type === "small"}
                                    onClick={() => setType("small")}
                                >
                                    SHORT
                                </TypeButton>
                                <TypeButton
                                    active={type === "medium"}
                                    onClick={() => setType("medium")}
                                >
                                    MEDIUM LENGTH
                                </TypeButton>
                            </Box>
                            <Box sx={{ textAlign: "left", marginTop: "10px" }}>
                                <TypeButton
                                    active={type === "large"}
                                    onClick={() => setType("large")}
                                >
                                    VERY VERY VERY LONG (UP TO 35 CHAR)
                                </TypeButton>
                            </Box>
                        </>
                    )}

                    <Box
                        sx={{
                            marginTop: "10px",
                            color: "#5f5f5f",
                            backgroundColor: "#000000",
                            borderRadius: "4px",
                            padding: "4px 8px",
                        }}
                    >
                        <textarea
                            placeholder="To add a new iteration, start typing a prompt or generate one"
                            className="text-area-prompt"
                            value={promptText}
                            onChange={(data) => setPromptText(data.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "end", marginTop: '8px' }}>
                        <button onClick={onCancelEvent} className="btn-right-margin">CANCEL</button>
                        <button onClick={handleCompleteExperiment}>DONE</button>
                    </Box></>
            )}

        </div>
    );
};

export default ExperimentContainer;

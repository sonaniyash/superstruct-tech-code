import { Box, Typography } from "@mui/material";

import LockIcon from "../../assets/lock-png.png";
import UnLockIcon from "../../assets/unlock-png.png";

const EmptyExperiment = ({
  isLock,
  children,
}: {
  isLock?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#191919",
        borderRadius: "8px",
        padding: "8px 20px",
        marginBottom: "4px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "400px",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <Typography
          fontWeight={800}
          color={isLock === false ? "#6d6d6c" : "#e9e8e8"}
        >
          Experiment Module
        </Typography>

        <Box
          sx={{
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            visibility: isLock === undefined ? "hidden" : "visible",
          }}
        >
          {isLock ? (
            <img src={LockIcon} width="100%" height="100%" alt="lock" />
          ) : (
            <img src={UnLockIcon} width="100%" height="100%" alt="Unlock" />
          )}
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default EmptyExperiment;

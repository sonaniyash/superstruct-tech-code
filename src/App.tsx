import { useEffect, useMemo } from "react";
import { Box } from "@mui/material";

import Experiment from "./components/Experiment";
import AddExperiment from "./components/AddExperiment";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  selectExperimentState,
  updateAddingNewModule,
} from "./store/slice/experimentSlice";

import "./App.css";

function App() {
  const { list, addingNewModule } = useAppSelector(selectExperimentState);

  const sortList = useMemo(() => {
    const listCopy = [...list];

    return listCopy.sort((a, b) => a.id - b.id)
  }, [list]);

  useEffect(() => {
    localStorage.setItem("experiments", JSON.stringify(sortList));
  }, [sortList]);

  const dispatch = useAppDispatch();

  return (
    <>
      {list.length === 0 && !addingNewModule ? (
        <button
          onClick={() => dispatch(updateAddingNewModule({ addingNew: true }))}
        >
          Add Experiment Module
        </button>
      ) : (
        sortList.map((a) => {
          return <Experiment key={a.id} data={a} />;
        })
      )}

      {!addingNewModule && list.length > 0 && (
        <Box sx={{ marginTop: "12px" }}>
          <button
            onClick={() => dispatch(updateAddingNewModule({ addingNew: true }))}
            className="add-new-module-btn"
          >
            Add New Module
          </button>
        </Box>
      )}

      {addingNewModule && <AddExperiment />}
    </>
  );
}

export default App;

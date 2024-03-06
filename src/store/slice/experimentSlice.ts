import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Experiment {
  id: number;
  title: string;
  iterations: string[];
  isLock: boolean;
}

interface State {
  list: Experiment[];
  addingNewModule: boolean;
}

const initialState: State = {
  list: JSON.parse(localStorage.getItem("experiments") ?? "[]") as Experiment[],
  addingNewModule: false,
};

const appSlice = createSlice({
  name: "experiment",
  initialState,
  reducers: {
    addExperiment: (state, action: PayloadAction<Experiment>) => {
      localStorage.setItem(
        "experiments",
        JSON.stringify([...state.list, action.payload])
      );
      state.list = [...state.list, action.payload];
      state.addingNewModule = false;
    },
    updateAddingNewModule: (
      state,
      action: PayloadAction<{ addingNew: boolean }>
    ) => {
      state.addingNewModule = action.payload.addingNew;
    },
    lockModule: (
      state,
      action: PayloadAction<{ id: number; isLock: boolean }>
    ) => {
      state.list = [
        ...state.list.filter((a) => a.id !== action.payload.id),
        {
          ...state.list.find((a) => a.id === action.payload.id)!,
          isLock: action.payload.isLock,
        },
      ];
    },
    addIterationToModule: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      state.list = [
        ...state.list.filter((a) => a.id !== action.payload.id),
        {
          ...state.list.find((a) => a.id === action.payload.id)!,
          iterations: [
            ...state.list.find((a) => a.id === action.payload.id)!.iterations,
            action.payload.title,
          ],
        },
      ];
    },
    resetExperimentModule: (state, action: PayloadAction<{ id: number }>) => {
      state.list = [
        ...state.list.filter((a) => a.id !== action.payload.id),
        {
          ...state.list.find((a) => a.id === action.payload.id)!,
          iterations: [],
        },
      ];
    },
  },
});

export const selectExperimentState = (state: RootState) => state.experiment;

export const {
  addExperiment,
  updateAddingNewModule,
  addIterationToModule,
  lockModule,
  resetExperimentModule,
} = appSlice.actions;

export default appSlice.reducer;

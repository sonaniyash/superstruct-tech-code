import ExperimentContainer from "../Experiment/ExperimentContainer";

import { useAppDispatch } from "../../store/hooks";
import { addExperiment } from "../../store/slice/experimentSlice";
import { useAppSelector } from "../../store/hooks";
import { selectExperimentState } from "../../store/slice/experimentSlice";

import { generateTitle } from "../../utils/api";
import { apikey } from "../../utils/constant";

const AddExperiment = () => {
  const dispatch = useAppDispatch();
  const { list } = useAppSelector(selectExperimentState);

  const handleAdd = (titleValue: string, title: string) => {
    // INFO: call the redux action to add the experiment value into redux storage
    dispatch(
      addExperiment({
        isLock: false,
        id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
        title,
        iterations: [titleValue],
      })
    );
  };

  const handleGenerateTitle = async ({ title, promptText, type }: any) => {
    // INFO: generate the Prompt engineering title from here and based on response trigger the handleAdd event.
    const response = await generateTitle(promptText, type.toString(), apikey);

    if (response) {
      handleAdd(response, title);
    } else {
      handleAdd(title, title);
    }
  };

  return (
    <ExperimentContainer onCancelEvent={() => console.log('')} onDoneEvent={handleGenerateTitle} isEmptyExperiment />
  );
};

export default AddExperiment;

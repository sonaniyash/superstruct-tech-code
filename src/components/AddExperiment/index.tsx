import ExperimentContainer from "../Experiment/ExperimentContainer";

const AddExperiment = () => {

  const handleAdd = (titleValue: string, title: string) => {
    // INFO: call the redux action to add the experiment value into redux storage
  };

  const handleGenerateTitle = async ({ title, promptText, type }: any) => {
    // INFO: generate the Prompt engineering title from here and based on response trigger the handleAdd event. 
  };

  return (
    <ExperimentContainer onCancelEvent={() => console.log('')} onDoneEvent={handleGenerateTitle} isEmptyExperiment />
  );
};

export default AddExperiment;

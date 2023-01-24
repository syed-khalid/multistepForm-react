import { FormEventHandler } from "react";
import "./App.css";
import { useMultistepForm } from "./hooks/useMultistepFrom";

function App() {
	const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
		useMultistepForm([<div>One</div>, <div>Two</div>]);

	return (
		<div className='App'>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}>
				<div className='stepinfo'>
					{currentStepIndex + 1}/{steps.length}
				</div>
				{step}
				<div className='buttons-container'>
					{isFirstStep ? null : <button onClick={back}>Back</button>}
					<button onClick={next}>{isLastStep ? "Finish" : "Next"}</button>
				</div>
			</form>
		</div>
	);
}

export default App;


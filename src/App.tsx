import { FormEvent, FormEventHandler } from "react";
import "./App.css";
import AccountForm from "./components/AccountForm";
import AddressForm from "./components/AddressForm";
import UserForm from "./components/UserForm";
import { useMultistepForm } from "./hooks/useMultistepFrom";

function App() {
	const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
		useMultistepForm([<UserForm />, <AddressForm />, <AccountForm />]);

	function onSubmit(e: FormEvent) {
		e.preventDefault();
		next();
	}

	return (
		<div className='App'>
			<form onSubmit={onSubmit}>
				<div className='stepinfo'>
					{currentStepIndex + 1}/{steps.length}
				</div>
				{step}
				<div className='buttons-container'>
					{isFirstStep ? null : (
						<button type='button' onClick={back}>
							Back
						</button>
					)}
					<button type='submit'>{isLastStep ? "Finish" : "Next"}</button>
				</div>
			</form>
		</div>
	);
}

export default App;


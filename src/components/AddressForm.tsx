import React from "react";
import FormWrapper from "./FormWrapper";

function AddressForm() {
	return (
		<FormWrapper title='Address Details'>
			<label>Street</label>
			<input type='text' required autoFocus />
			<label>City</label>
			<input type='text' required />
			<label>State</label>
			<input type='text' required />
			<label>Zip</label>
			<input type='text' required />
		</FormWrapper>
	);
}

export default AddressForm;

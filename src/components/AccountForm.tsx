import React from "react";
import FormWrapper from "./FormWrapper";

function AccountForm() {
	return (
		<FormWrapper title='Account Details'>
			<label>Email</label>
			<input type='email' required autoFocus />
			<label>Password</label>
			<input type='password' required />
		</FormWrapper>
	);
}

export default AccountForm;

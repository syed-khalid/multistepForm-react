import React from "react";

function AccountForm() {
	return (
		<>
			<label>Email</label>
			<input type='email' required autoFocus />
			<label>Password</label>
			<input type='password' required />
		</>
	);
}

export default AccountForm;

import React from "react";

function UserForm() {
	return (
		<>
			<label>First Name</label>
			<input type='text' required autoFocus />
			<label>Last Name</label>
			<input type='text' required />
			<label>Age</label>
			<input type='number' min={1} required />
		</>
	);
}

export default UserForm;

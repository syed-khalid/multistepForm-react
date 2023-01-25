import React, { ReactNode } from "react";

type FormWrapperProps = {
	title: string;
	children: ReactNode;
};

function FormWrapper({ title, children }: FormWrapperProps) {
	return (
		<>
			<h2 className='heading'>{title}</h2>
			<div className='forms'>{children}</div>
		</>
	);
}

export default FormWrapper;

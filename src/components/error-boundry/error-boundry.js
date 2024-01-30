import React from 'react';
import Error from '../error';

export default function ErrorBoundry ({children}){
	try{
		return (<>
			{children}
			</>
		);
	}
	catch (error){
		return (
			<Error message={error.message ?? 'Unknown error'}></Error>
		)
	}
}
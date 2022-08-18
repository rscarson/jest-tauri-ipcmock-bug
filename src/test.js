import React, {useEffect, useState} from 'react';
import { listen } from '@tauri-apps/api/event';
import { invoke } from '@tauri-apps/api/tauri';

function TestComponent(props) {
	let [ePayload, setEPayload] = useState(undefined);
	let [fPayload, setFPayload] = useState(undefined);

	useEffect(() => {
		listen('eventName', event => {
			// This will be correct about a third of the time
			console.log(`This should never get called! Payload: ${JSON.stringify(event)}`);
			setEPayload(event);
		});
        invoke("functionName").then(payload => {
			setFPayload(payload);
		});
	}, []);

	return (
		<div>
			E: {ePayload}
			F: {fPayload}
		</div>
	);
}

export default TestComponent;
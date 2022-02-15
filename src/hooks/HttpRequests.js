import axios from 'axios';
import { useEffect, useState } from 'react';

export function useAxiosGet(url) {
	const [request, setRequest] = useState({
		isLoading: false,
		data: null,
		error: false,
	});

	useEffect(() => {
		setRequest({
			isLoading: true,
			data: null,
			error: false,
		});
		axios
			.get(url)
			.then((response) => {
				setRequest({
					isLoading: false,
					data: response.data,
					error: false,
				});
			})
			.catch(() => {
				setRequest({
					isLoading: false,
					data: null,
					error: true,
				});
			});
	}, [url]);

	return request;
}

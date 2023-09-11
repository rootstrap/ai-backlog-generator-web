import axios from 'axios';

export const backlogApi = axios.create({
	baseURL: 'https://ai-backlog-refinement.onrender.com/api/v1/',
	headers: {
		'Content-Type': 'application/json',
	},
});

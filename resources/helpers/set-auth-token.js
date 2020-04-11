export default function setAuthToken(token) {
	console.log('setAuthToken: ',token)
	axios.defaults.headers.common['Authorization'] = '';
	delete axios.defaults.headers.common['Authorization'];

	if (token) {
		axios.defaults.headers.common['Authorization'] = `${token}`;
	}
}
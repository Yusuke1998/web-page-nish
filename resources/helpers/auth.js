
export function login(credentials) {
	return new Promise((res,rej) => {
		axios.post('api/login/',credentials)
		.then((response) => {
			res(response.data)
		})
		.catch((error) => {
			rej(error)
		})
	})
}

export function getLocalUser() {
	const user = localStorage.getItem("user");
	if (!user) {
		return null;
	}

	return JSON.parse(user)
}
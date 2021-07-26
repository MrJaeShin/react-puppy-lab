import * as usersAPI from './users-api';

export async function signUp(userData) {
	try {
		const token = await usersAPI.signUp(userData);
		return token;
	} catch {
		throw new Error('Invalid Sign Up');
	}
}

export function getToken() {
    const token = localStorage.getItem('token')
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]))
    if (payload.exp<Date.now() /1000) {
        localStorage.removeItem('token');
        return null;
    }
    return getUser();
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user: null;
}
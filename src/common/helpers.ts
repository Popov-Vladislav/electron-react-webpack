export function inDev(): boolean {
	return process.env.NODE_ENV == 'development';
}

export function inWeb(): boolean {
	return process.env.APP_ENV == 'web';
}

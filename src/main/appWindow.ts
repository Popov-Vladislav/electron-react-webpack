import { app, BrowserWindow } from 'electron';
// import path from 'path';

// Electron Forge автоматически создает эти точки входа
declare const APP_WINDOW_WEBPACK_ENTRY: string;
declare const APP_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let appWindow: BrowserWindow | null;

/**
 * Создаёт окно приложения
 * @returns {BrowserWindow} Экземпляр окна приложения
 */
export function createAppWindow(): BrowserWindow {
	// первоначальные настройки нового окна
	appWindow = new BrowserWindow({
		width: 800,
		height: 600,
		backgroundColor: '#ccc',
		show: false,
		autoHideMenuBar: true,
		frame: false,
		titleBarStyle: 'hidden',
		// icon: path.resolve('assets/images/appIcon.ico'),
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			nodeIntegrationInWorker: true,
			nodeIntegrationInSubFrames: true,
			preload: APP_WINDOW_PRELOAD_WEBPACK_ENTRY,
			sandbox: false,
		},
	});

	// Загружает index.html окна приложения
	appWindow.loadURL(APP_WINDOW_WEBPACK_ENTRY);

	// Показать окно, когда оно будет готово
	appWindow.on('ready-to-show', () => appWindow?.show());

	// Зарегистрировать межпроцессное взаимодействие (IPC) для основного процесса
	registerMainIPC();

	// Закрыть все окна, когда закрыто главное окно
	appWindow.on('close', () => {
		appWindow = null;
		app.quit();
	});

	return appWindow;
}

/**
 * Регистрация IPC
 */
function registerMainIPC() {
	/**
	 * Здесь можно описать процессы/код, связанный с IPC,
	 * для окна приложения, для асинхронной связи между основным процессом (IPC Main)
	 * и процессами визуализации (IPC Renderer).
	 */
}

import { inWeb } from '@common/helpers';
import { app, BrowserWindow } from 'electron';

import { createAppWindow } from './appWindow';

const appElectron = function () {
	/** Обработка создания/удаления ярлыков в Windows при установке/удалении. */
	if (require('electron-squirrel-startup')) {
		app.quit();
	}

	/**
	 * Этот метод будет вызываться, когда Electron закончит инициализацию
	 * и будет готов создавать окна браузера.
	 * Некоторые API можно использовать только после того, как произойдет это событие.
	 */
	app.on('ready', createAppWindow);

	/**
	 * Запускается при активации приложения. Это событие может быть вызвано различными действиями,
	 * запуск приложения в первый раз, попытака повторного запуска приложения, когда оно уже запущено
	 * или клик по значку приложения на панели задач
	 */
	app.on('activate', () => {
		/**
		 * На OS X обычно повторно создают окно в приожении, когда кликают на иконку,
		 * а другие окна не открыты
		 */
		if (BrowserWindow.getAllWindows().length === 0) {
			createAppWindow();
		}
	});

	/**
	 * Запускается, когда все окна закрыты
	 */
	app.on('window-all-closed', () => {
		/**
		 * В OS X приложения и их строка меню обычно остаются активными до тех пор,
		 *  пока пользователь не выйдет явно с помощью Cmd + Q.
		 */
		if (process.platform !== 'darwin') {
			app.quit();
		}
	});
};

const appWeb = () => import('@src/app/index');

if (inWeb()) {
	appWeb();
} else appElectron();

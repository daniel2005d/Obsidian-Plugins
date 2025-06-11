import { Plugin, MarkdownView , Notice } from 'obsidian';


export default class MyPlugin extends Plugin {


	async onload() {

		this.registerDomEvent(document, 'paste', async (evt: ClipboardEvent) => {
			console.log('Pasting image...');
			const clipboardItems = evt.clipboardData?.items;
			const view = this.app.workspace.getActiveViewOfType(MarkdownView);
			const editor = view?.editor;
			const activeFile = view?.file;
			const baseName = activeFile?.basename.replace(/\s+/g, '');
			if (!clipboardItems) return;

			for (const item of Array.from(clipboardItems)) {
				if (item.type.startsWith('image/')) {
					evt.preventDefault();

					const file = item.getAsFile();
					if (!file) return;

					const arrayBuffer = await file.arrayBuffer();
					const uint8Array = new Uint8Array(arrayBuffer);

					// Crear carpeta 'images' si no existe
					const folderPath = 'images';
					const folderExists = this.app.vault.getAbstractFileByPath(folderPath);
					if (!folderExists) {
						await this.app.vault.createFolder(folderPath);
					}

					// Generar nombre único para la imagen
					const timestamp = Date.now();
					const ext = file.name.split('.').pop() || 'png';
					const randomPart = Math.floor(Math.random() * 10000);
          			const imagePath = `${folderPath}/${baseName}_${timestamp}.${ext}`;
					
					// Guardar archivo
					await this.app.vault.createBinary(imagePath, uint8Array);

					// Insertar referencia markdown a la imagen en el editor activo
					const markdownView = this.app.workspace.getActiveViewOfType((this.app as any).workspace.constructor.MarkdownView || (window as any).MarkdownView);
					const view = markdownView || this.app.workspace.getActiveViewOfType((window as any).MarkdownView);
					if (view && 'editor' in view) {
						const editor = (view as any).editor;
						editor.replaceSelection(`![[${imagePath}]]`);
					}

					new Notice(`Imagen guardada en ${imagePath}`);
					break;
				}
			}
		});


	}

	onunload() {

	}


}

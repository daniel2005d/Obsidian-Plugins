import { Plugin, Notice, Menu, MarkdownView } from 'obsidian';


export default class RichText extends Plugin {
	getSelectedText(): string | undefined {
		const editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
		const selectedText:string|undefined = editor?.getSelection();
		return selectedText;
	}

	addCode():void{
		const editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
		const selectedText:string|undefined = this.getSelectedText();
		const languages = ['javascript', 'python', 'java', 'csharp', 'cpp', 'html', 'css', 'bash', 'shell', 'powershell','json', 
			'yaml', 'xml', 'sql', 'ruby', 'go', 'rust', 'typescript', 'php', 'swift', 'kotlin', 'dart', 'r', 'matlab', 'perl'];
		if (languages.includes(selectedText ?? "")) {
				editor?.replaceSelection("```"+selectedText+"\n```");
		}

	}

	addCallout(): void {
		
		const editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
		const selectedText:string|undefined = this.getSelectedText();
		let calloutText = "";
		const callouts = ['success', 'failure', 'info', 'warning', "todo", "tip", "question", "failure", "danger", "bug", "example", "quote"];
		if (callouts.includes(selectedText ?? "")) {
			
				calloutText = `> [!${selectedText}] `;
				editor?.replaceSelection(calloutText);
		}
		else{
			this.addCode();
		}
	
	}

	onload(): void {
		

			this.addCommand({
				id: "Mardown snippet",
				name: `Insert Markdown Snippet`,
				hotkeys: [{ modifiers: ['Mod'], key: ' ' }],
				callback: () => {
					this.addCallout();
				}
			})


		this.registerEvent(
			this.app.workspace.on('editor-menu', (menu, editor, view) => {

				['success', 'failure', 'info', 'warning', "todo", "tip", "question", "failure", "danger", "bug", "example", "quote"].forEach(element => {
					menu.addItem((item) => {
						item.setTitle(`Insert ${element} Callout`)
							
							.onClick(() => {
								this.addCallout();
							})
					}); // End Menu 1
				});
				

				// menu.addItem((item) => {
				// 	item.setTitle("Set Title 2")
				// 		.setIcon('heading-2')
				// 		.onClick(() => {
				// 			this.changeText(editor, 1);
				// 		})
				// }); // End Menu 2

				// menu.addItem((item) => {
				// 	item.setTitle("Set Success")
				// 		.setIcon('laptop-minimal-check')
				// 		.onClick(() => {
				// 			this.changeText(editor, 2);
				// 		})
				// }); // End Menu 2

				// menu.addItem((item) => {
				// 	item.setTitle("Set Success")
				// 		.setIcon('ticket-x')
				// 		.onClick(() => {
				// 			this.changeText(editor, 3);
				// 		})
				// }); // End Menu 2
			})
		)


	} // End onload
}
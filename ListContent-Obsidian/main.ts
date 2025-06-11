import {  Plugin, TFile, Menu, MarkdownView } from 'obsidian';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		
		this.addRibbonIcon('dice', 'Add TODO', (event) => {
			 const list = [
				"---",
				"# TODO"
			 ]
			
			 // Filtrar y ordenar notas que comienzan con número
        const numberedFiles = this.app.vault.getMarkdownFiles()
          .filter((f: TFile) => /^\d+/.test(f.basename))
          .sort((a, b) => {
            const numA = parseInt(a.basename.match(/^\d+/)?.[0] || '0', 10);
            const numB = parseInt(b.basename.match(/^\d+/)?.[0] || '0', 10);
            return numA - numB;
          });

			 for (const file of numberedFiles) {
					const num = file.basename.match(/^\d+/)?.[0] || '';
					const nameLink = `[[${file.basename}]]`;
 					//list.push(`| ${num} | ${nameLink} | - [ ] |`);
					list.push(`- [ ] ${nameLink}`);
			}

			const markdownTable = list.join("\n");
			const editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
			editor?.replaceSelection(markdownTable);
			//this.app.vault.create("TablaNotas.md", markdownTable);
		});


		
	}

	onunload() {

	}

	
}


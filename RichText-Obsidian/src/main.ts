import { Plugin, MarkdownView } from "obsidian";

export default class HtmlWrapperPlugin extends Plugin {
  async onload() {
    const wrapSelection = () => {
      const editor = this.app.workspace.getActiveViewOfType(MarkdownView)?.editor;
      if (!editor) return;

      const selectedText = editor.getSelection();
      const wrapped = `<strong>${selectedText}</strong>`;
      editor.replaceSelection(wrapped);
    };

    this.addCommand({
      id: "wrap-selection-html",
      name: "Wrap selection with <strong> HTML",
      editorCallback: wrapSelection,
    });

    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor) => {
        menu.addItem((item) => {
          item
            .setTitle("Wrap in <strong> HTML")
            .setIcon("braces")
            .onClick(() => {
              const selectedText = editor.getSelection();
              editor.replaceSelection(`<strong>${selectedText}</strong>`);
            });
        });
      })
    );
  }
}

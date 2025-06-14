/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => RichText
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var RichText = class extends import_obsidian.Plugin {
  getSelectedText() {
    var _a;
    const editor = (_a = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView)) == null ? void 0 : _a.editor;
    const selectedText = editor == null ? void 0 : editor.getSelection();
    return selectedText;
  }
  addCode() {
    var _a;
    const editor = (_a = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView)) == null ? void 0 : _a.editor;
    const selectedText = this.getSelectedText();
    const languages = [
      "javascript",
      "python",
      "java",
      "csharp",
      "cpp",
      "html",
      "css",
      "bash",
      "shell",
      "powershell",
      "json",
      "yaml",
      "xml",
      "sql",
      "ruby",
      "go",
      "rust",
      "typescript",
      "php",
      "swift",
      "kotlin",
      "dart",
      "r",
      "matlab",
      "perl"
    ];
    if (languages.includes(selectedText != null ? selectedText : "")) {
      editor == null ? void 0 : editor.replaceSelection("```" + selectedText + "\n```");
    }
  }
  addCallout() {
    var _a;
    const editor = (_a = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView)) == null ? void 0 : _a.editor;
    const selectedText = this.getSelectedText();
    let calloutText = "";
    const callouts = ["success", "failure", "info", "warning", "todo", "tip", "question", "failure", "danger", "bug", "example", "quote"];
    if (callouts.includes(selectedText != null ? selectedText : "")) {
      calloutText = `> [!${selectedText}] `;
      editor == null ? void 0 : editor.replaceSelection(calloutText);
    } else {
      this.addCode();
    }
  }
  onload() {
    this.addCommand({
      id: "Mardown snippet",
      name: `Insert Markdown Snippet`,
      hotkeys: [{ modifiers: ["Mod"], key: " " }],
      callback: () => {
        this.addCallout();
      }
    });
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor, view) => {
        ["success", "failure", "info", "warning", "todo", "tip", "question", "failure", "danger", "bug", "example", "quote"].forEach((element) => {
          menu.addItem((item) => {
            item.setTitle(`Insert ${element} Callout`).onClick(() => {
              this.addCallout();
            });
          });
        });
      })
    );
  }
  // End onload
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luLCBOb3RpY2UsIE1lbnUsIE1hcmtkb3duVmlldyB9IGZyb20gJ29ic2lkaWFuJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dCBleHRlbmRzIFBsdWdpbiB7XHJcblx0Z2V0U2VsZWN0ZWRUZXh0KCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XHJcblx0XHRjb25zdCBzZWxlY3RlZFRleHQ6c3RyaW5nfHVuZGVmaW5lZCA9IGVkaXRvcj8uZ2V0U2VsZWN0aW9uKCk7XHJcblx0XHRyZXR1cm4gc2VsZWN0ZWRUZXh0O1xyXG5cdH1cclxuXHJcblx0YWRkQ29kZSgpOnZvaWR7XHJcblx0XHRjb25zdCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XHJcblx0XHRjb25zdCBzZWxlY3RlZFRleHQ6c3RyaW5nfHVuZGVmaW5lZCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KCk7XHJcblx0XHRjb25zdCBsYW5ndWFnZXMgPSBbJ2phdmFzY3JpcHQnLCAncHl0aG9uJywgJ2phdmEnLCAnY3NoYXJwJywgJ2NwcCcsICdodG1sJywgJ2NzcycsICdiYXNoJywgJ3NoZWxsJywgJ3Bvd2Vyc2hlbGwnLCdqc29uJywgXHJcblx0XHRcdCd5YW1sJywgJ3htbCcsICdzcWwnLCAncnVieScsICdnbycsICdydXN0JywgJ3R5cGVzY3JpcHQnLCAncGhwJywgJ3N3aWZ0JywgJ2tvdGxpbicsICdkYXJ0JywgJ3InLCAnbWF0bGFiJywgJ3BlcmwnXTtcclxuXHRcdGlmIChsYW5ndWFnZXMuaW5jbHVkZXMoc2VsZWN0ZWRUZXh0ID8/IFwiXCIpKSB7XHJcblx0XHRcdFx0ZWRpdG9yPy5yZXBsYWNlU2VsZWN0aW9uKFwiYGBgXCIrc2VsZWN0ZWRUZXh0K1wiXFxuYGBgXCIpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGFkZENhbGxvdXQoKTogdm9pZCB7XHJcblx0XHRcclxuXHRcdGNvbnN0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcclxuXHRcdGNvbnN0IHNlbGVjdGVkVGV4dDpzdHJpbmd8dW5kZWZpbmVkID0gdGhpcy5nZXRTZWxlY3RlZFRleHQoKTtcclxuXHRcdGxldCBjYWxsb3V0VGV4dCA9IFwiXCI7XHJcblx0XHRjb25zdCBjYWxsb3V0cyA9IFsnc3VjY2VzcycsICdmYWlsdXJlJywgJ2luZm8nLCAnd2FybmluZycsIFwidG9kb1wiLCBcInRpcFwiLCBcInF1ZXN0aW9uXCIsIFwiZmFpbHVyZVwiLCBcImRhbmdlclwiLCBcImJ1Z1wiLCBcImV4YW1wbGVcIiwgXCJxdW90ZVwiXTtcclxuXHRcdGlmIChjYWxsb3V0cy5pbmNsdWRlcyhzZWxlY3RlZFRleHQgPz8gXCJcIikpIHtcclxuXHRcdFx0XHJcblx0XHRcdFx0Y2FsbG91dFRleHQgPSBgPiBbISR7c2VsZWN0ZWRUZXh0fV0gYDtcclxuXHRcdFx0XHRlZGl0b3I/LnJlcGxhY2VTZWxlY3Rpb24oY2FsbG91dFRleHQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dGhpcy5hZGRDb2RlKCk7XHJcblx0XHR9XHJcblx0XHJcblx0fVxyXG5cclxuXHRvbmxvYWQoKTogdm9pZCB7XHJcblx0XHRcclxuXHJcblx0XHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdFx0aWQ6IFwiTWFyZG93biBzbmlwcGV0XCIsXHJcblx0XHRcdFx0bmFtZTogYEluc2VydCBNYXJrZG93biBTbmlwcGV0YCxcclxuXHRcdFx0XHRob3RrZXlzOiBbeyBtb2RpZmllcnM6IFsnTW9kJ10sIGtleTogJyAnIH1dLFxyXG5cdFx0XHRcdGNhbGxiYWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZENhbGxvdXQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblxyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJFdmVudChcclxuXHRcdFx0dGhpcy5hcHAud29ya3NwYWNlLm9uKCdlZGl0b3ItbWVudScsIChtZW51LCBlZGl0b3IsIHZpZXcpID0+IHtcclxuXHJcblx0XHRcdFx0WydzdWNjZXNzJywgJ2ZhaWx1cmUnLCAnaW5mbycsICd3YXJuaW5nJywgXCJ0b2RvXCIsIFwidGlwXCIsIFwicXVlc3Rpb25cIiwgXCJmYWlsdXJlXCIsIFwiZGFuZ2VyXCIsIFwiYnVnXCIsIFwiZXhhbXBsZVwiLCBcInF1b3RlXCJdLmZvckVhY2goZWxlbWVudCA9PiB7XHJcblx0XHRcdFx0XHRtZW51LmFkZEl0ZW0oKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0aXRlbS5zZXRUaXRsZShgSW5zZXJ0ICR7ZWxlbWVudH0gQ2FsbG91dGApXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Lm9uQ2xpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hZGRDYWxsb3V0KCk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0pOyAvLyBFbmQgTWVudSAxXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdC8vIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0aXRlbS5zZXRUaXRsZShcIlNldCBUaXRsZSAyXCIpXHJcblx0XHRcdFx0Ly8gXHRcdC5zZXRJY29uKCdoZWFkaW5nLTInKVxyXG5cdFx0XHRcdC8vIFx0XHQub25DbGljaygoKSA9PiB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0dGhpcy5jaGFuZ2VUZXh0KGVkaXRvciwgMSk7XHJcblx0XHRcdFx0Ly8gXHRcdH0pXHJcblx0XHRcdFx0Ly8gfSk7IC8vIEVuZCBNZW51IDJcclxuXHJcblx0XHRcdFx0Ly8gbWVudS5hZGRJdGVtKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0Ly8gXHRpdGVtLnNldFRpdGxlKFwiU2V0IFN1Y2Nlc3NcIilcclxuXHRcdFx0XHQvLyBcdFx0LnNldEljb24oJ2xhcHRvcC1taW5pbWFsLWNoZWNrJylcclxuXHRcdFx0XHQvLyBcdFx0Lm9uQ2xpY2soKCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0XHRcdHRoaXMuY2hhbmdlVGV4dChlZGl0b3IsIDIpO1xyXG5cdFx0XHRcdC8vIFx0XHR9KVxyXG5cdFx0XHRcdC8vIH0pOyAvLyBFbmQgTWVudSAyXHJcblxyXG5cdFx0XHRcdC8vIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0aXRlbS5zZXRUaXRsZShcIlNldCBTdWNjZXNzXCIpXHJcblx0XHRcdFx0Ly8gXHRcdC5zZXRJY29uKCd0aWNrZXQteCcpXHJcblx0XHRcdFx0Ly8gXHRcdC5vbkNsaWNrKCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFx0XHR0aGlzLmNoYW5nZVRleHQoZWRpdG9yLCAzKTtcclxuXHRcdFx0XHQvLyBcdFx0fSlcclxuXHRcdFx0XHQvLyB9KTsgLy8gRW5kIE1lbnUgMlxyXG5cdFx0XHR9KVxyXG5cdFx0KVxyXG5cclxuXHJcblx0fSAvLyBFbmQgb25sb2FkXHJcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQW1EO0FBR25ELElBQXFCLFdBQXJCLGNBQXNDLHVCQUFPO0FBQUEsRUFDNUMsa0JBQXNDO0FBSnZDO0FBS0UsVUFBTSxVQUFTLFVBQUssSUFBSSxVQUFVLG9CQUFvQiw0QkFBWSxNQUFuRCxtQkFBc0Q7QUFDckUsVUFBTSxlQUFnQyxpQ0FBUTtBQUM5QyxXQUFPO0FBQUEsRUFDUjtBQUFBLEVBRUEsVUFBYztBQVZmO0FBV0UsVUFBTSxVQUFTLFVBQUssSUFBSSxVQUFVLG9CQUFvQiw0QkFBWSxNQUFuRCxtQkFBc0Q7QUFDckUsVUFBTSxlQUFnQyxLQUFLLGdCQUFnQjtBQUMzRCxVQUFNLFlBQVk7QUFBQSxNQUFDO0FBQUEsTUFBYztBQUFBLE1BQVU7QUFBQSxNQUFRO0FBQUEsTUFBVTtBQUFBLE1BQU87QUFBQSxNQUFRO0FBQUEsTUFBTztBQUFBLE1BQVE7QUFBQSxNQUFTO0FBQUEsTUFBYTtBQUFBLE1BQ2hIO0FBQUEsTUFBUTtBQUFBLE1BQU87QUFBQSxNQUFPO0FBQUEsTUFBUTtBQUFBLE1BQU07QUFBQSxNQUFRO0FBQUEsTUFBYztBQUFBLE1BQU87QUFBQSxNQUFTO0FBQUEsTUFBVTtBQUFBLE1BQVE7QUFBQSxNQUFLO0FBQUEsTUFBVTtBQUFBLElBQU07QUFDbEgsUUFBSSxVQUFVLFNBQVMsc0NBQWdCLEVBQUUsR0FBRztBQUMxQyx1Q0FBUSxpQkFBaUIsUUFBTSxlQUFhO0FBQUEsSUFDOUM7QUFBQSxFQUVEO0FBQUEsRUFFQSxhQUFtQjtBQXJCcEI7QUF1QkUsVUFBTSxVQUFTLFVBQUssSUFBSSxVQUFVLG9CQUFvQiw0QkFBWSxNQUFuRCxtQkFBc0Q7QUFDckUsVUFBTSxlQUFnQyxLQUFLLGdCQUFnQjtBQUMzRCxRQUFJLGNBQWM7QUFDbEIsVUFBTSxXQUFXLENBQUMsV0FBVyxXQUFXLFFBQVEsV0FBVyxRQUFRLE9BQU8sWUFBWSxXQUFXLFVBQVUsT0FBTyxXQUFXLE9BQU87QUFDcEksUUFBSSxTQUFTLFNBQVMsc0NBQWdCLEVBQUUsR0FBRztBQUV6QyxvQkFBYyxPQUFPO0FBQ3JCLHVDQUFRLGlCQUFpQjtBQUFBLElBQzNCLE9BQ0k7QUFDSCxXQUFLLFFBQVE7QUFBQSxJQUNkO0FBQUEsRUFFRDtBQUFBLEVBRUEsU0FBZTtBQUdiLFNBQUssV0FBVztBQUFBLE1BQ2YsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLEVBQUUsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQztBQUFBLE1BQzFDLFVBQVUsTUFBTTtBQUNmLGFBQUssV0FBVztBQUFBLE1BQ2pCO0FBQUEsSUFDRCxDQUFDO0FBR0YsU0FBSztBQUFBLE1BQ0osS0FBSyxJQUFJLFVBQVUsR0FBRyxlQUFlLENBQUMsTUFBTSxRQUFRLFNBQVM7QUFFNUQsU0FBQyxXQUFXLFdBQVcsUUFBUSxXQUFXLFFBQVEsT0FBTyxZQUFZLFdBQVcsVUFBVSxPQUFPLFdBQVcsT0FBTyxFQUFFLFFBQVEsYUFBVztBQUN2SSxlQUFLLFFBQVEsQ0FBQyxTQUFTO0FBQ3RCLGlCQUFLLFNBQVMsVUFBVSxpQkFBaUIsRUFFdkMsUUFBUSxNQUFNO0FBQ2QsbUJBQUssV0FBVztBQUFBLFlBQ2pCLENBQUM7QUFBQSxVQUNILENBQUM7QUFBQSxRQUNGLENBQUM7QUFBQSxNQTBCRixDQUFDO0FBQUEsSUFDRjtBQUFBLEVBR0Q7QUFBQTtBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=

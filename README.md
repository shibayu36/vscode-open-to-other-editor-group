# Open to Other Editor Group

This is a Visual Studio Code extension that makes it easily to open a selected file to next to active editor group.

![Demo](https://github.com/shibayu36/vscode-open-to-other-editor-group/blob/main/images/demo.gif)

## Commands
### Open to Other Editor Group
Open selected file to a different editor group than the one you are currently focus on.  This is inspired by "Open to the Side" menu command.  This command doesn't create a large number of editor group, unlike "Open to the Side".

## Useful Keyboard Shortcuts Example
```json
// Open the focused file in Explorer View to next to the active editor group.
{
  "key": "ctrl+o",
  "command": "open-to-other-editor-group.openToOtherEditorGroup",
  "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsFolder && !inputFocus"
}
```

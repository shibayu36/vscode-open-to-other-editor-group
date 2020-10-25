// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "open-to-other-editor-group" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("open-to-other-editor-group.openToOtherEditorGroup", () => {
    // The code you place here will be executed every time your command is executed
    openToOtherEditorGroup();
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

async function openToOtherEditorGroup(): Promise<void> {
  await vscode.commands.executeCommand("copyFilePath");
  const filename = await vscode.env.clipboard.readText();

  let uri: vscode.Uri;
  try {
    uri = vscode.Uri.parse(filename);
  } catch {
    return;
  }

  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return;
  }

  const editors = vscode.window.visibleTextEditors;
  let columnToOpen: number;
  if (editors.length <= 1) {
    // If there is only one editor group, create a second one.
    columnToOpen = -2;
  } else if (activeEditor.viewColumn === editors.length) {
    // If you are in the last editorGroup, show in the first editorGroup
    columnToOpen = 1;
  } else {
    // Show in the next editorGroup
    columnToOpen = activeEditor.viewColumn ? activeEditor.viewColumn + 1 : 1;
  }

  await vscode.commands.executeCommand("vscode.open", uri, columnToOpen);
}

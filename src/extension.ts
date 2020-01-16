import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument(event => {
      const { contentChanges } = event;
      // content changes are serialized differently in vscode and sbas
      console.log(JSON.stringify(contentChanges));
    })
  );
}

export function deactivate() {}

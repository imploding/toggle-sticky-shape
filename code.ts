// This plugin creates 5 shapes and 5 connectors

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

for (const node of figma.currentPage.selection) {
  if ('isWideWidth' in node) {
    node.isWideWidth = !node.isWideWidth;
  }
}
figma.closePlugin();

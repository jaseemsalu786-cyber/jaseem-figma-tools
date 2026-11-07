
const selectedLayers = figma.currentPage.selection;

if (selectedLayers.length === 0) {
  figma.notify("Please select a layer first!");
  figma.closePlugin();
} else {
  const details = selectedLayers.map((node) => {
    return `${node.name} (${node.type})`;
  });

  console.log("Selected layers:", details);

  figma.notify(
    `Jaseem Assistant: ${selectedLayers.length} layer(s) detected!`
  );

  figma.closePlugin();
}

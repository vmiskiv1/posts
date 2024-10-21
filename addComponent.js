const fs = require("fs");
const path = require("path");

const createComponent = (componentName) => {
  const componentDir = path.join(__dirname, "src", "components", componentName);
  const indexFilePath = path.join(componentDir, "index.ts");
  const typesFilePath = path.join(componentDir, "types.ts");
  const componentFilePath = path.join(componentDir, `${componentName}.tsx`);

  if (fs.existsSync(componentDir)) {
    console.error(`Folder "${componentName}" already exists!`);

    return;
  }

  fs.mkdirSync(componentDir);

  fs.writeFileSync(
    indexFilePath,
    `export { ${componentName} } from './${componentName}';\n`,
  );

  fs.writeFileSync(typesFilePath, ``);

  const componentContent = `export const ${componentName} = () => {
  return <div>${componentName} Component</div>;
};\n`;

  fs.writeFileSync(componentFilePath, componentContent);
};

const componentName = process.argv[2];
if (!componentName) {
  process.exit(1);
}

createComponent(componentName);

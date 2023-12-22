## Building an HTML Page from Components and Styles

In the `index.js` file within the `06-build-page` directory, develop a script that:

1. Creates a folder named `project-dist`.
2. Replaces template tags in the `template.html` file with filenames from the `components` folder (e.g., `{{section}}`) and saves the result in `project-dist/index.html`.
3. Compiles styles from the `styles` folder into a single file and places it in `project-dist/style.css`.
4. Copies the `assets` folder into `project-dist/assets`.

### General Rules

- The use of any third-party modules is prohibited.
- Each task must be executed <u>in the root directory</u> using the command `node <task folder name>`.
- The use of synchronous functions from the **fs module**, such as `fs.statSync(path[, options])`, `fs.readFileSync(path[, options])`, and others found in the [synchronous API section](https://nodejs.org/api/fs.html#fs_synchronous_api), is prohibited.

### Requirements

- [ ] After the script execution terminates, the `project-dist` folder should be created.
- [ ] The `project-dist` folder should contain files `index.html` and `style.css`.
- [ ] The `project-dist` folder should contain an `assets` folder that is an exact copy of the `assets` folder in `06-build-page`.
- [ ] The use of `fsPromises.cp()` is prohibited.
- [ ] The `index.html` file should contain markup resulting from the replacement of template tags in the `template.html` file.
- [ ] The `style.css` file should contain styles compiled from files in the `styles` folder.
- [ ] When adding a component to the folder and the corresponding tag to the original `template.html` file, rerunning the script should update the `index.html` file in the `project-dist` folder. The `style.css` file and `assets` folder should also maintain an up-to-date state.
- [ ] When writing two or more template tags consecutively in the `template.html` file, separated only by spaces without line breaks, there should be no code execution errors. For example, `{{about}} {{articles}}` should be interpreted as two <u>separate</u> components.
- [ ] The original `template.html` file should not be modified during script execution.
- [ ] Writing content to the template from any files except those with the `.html` extension is an error.

### Objectives

- Create a small utility to assemble a static HTML page.
- Reinforce acquired knowledge.

### Description

Possible steps to complete the task:

1. Import all required modules.
2. Read and save the template file in a variable.
3. Find all tag names in the template file.
4. Replace template tags with the content of component files.
5. Write the modified template to the `index.html` file in the `project-dist` folder.
6. Use the script written in task **05-merge-styles** to create the `style.css` file.
7. Use the script from task **04-copy-directory** to move the `assets` folder into the `project-dist` folder.

Note that you can optimize and modify this algorithm according to your preferences.

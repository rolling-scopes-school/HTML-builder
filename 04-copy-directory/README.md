## Copying a Directory

In the `index.js` file of the `04-copy-directory` folder, implement the `copyDir` function, which copies the contents of the files folder to the `files-copy` folder.

### General Rules

- The use of any third-party modules is prohibited.
- Each task must be executed <u>in the root directory</u> using the command `node <task folder name>`.
- The use of synchronous functions from the **fs module**, such as `fs.statSync(path[, options])`, `fs.readFileSync(path[, options])`, and others found in the [synchronous API section](https://nodejs.org/api/fs.html#fs_synchronous_api), is prohibited.

### Requirements

- [ ] After the function execution terminates, a `files-copy` folder is created, the contents of which are an exact copy of the original `files` folder.
- [ ] When files are added/removed/modified in the `files` folder and the `node 04-copy-directory` is rerun, the contents of the `files-copy` folder are updated.
- [ ] The use of `fsPromises.cp()` is prohibited.

### Objectives

- Learn to copy files and directories.

### Description

Steps to complete the task:

1. Import all required modules.
2. Create the `files-copy` folder if it does not exist yet.
3. Read the contents of the `files` folder.
4. Copy files from the `files` folder to the `files-copy` folder.

### Tips

Pay attention to the `recursive` option that can be passed to `fsPromises/mkdir`. With its help, you can avoid errors in cases where the directory already exists.

##### Useful Links

- [copyFile](https://nodejs.org/api/fs.html#fs_fspromises_copyfile_src_dest_mode)
- [fs.copyFile() Function](https://www.geeksforgeeks.org/node-js-fs-copyfile-function/)
- [mkdir](https://nodejs.org/api/fs.html#fs_fspromises_mkdir_path_options)
- [fs.mkdir() Method](https://www.geeksforgeeks.org/node-js-fs-mkdir-method/)

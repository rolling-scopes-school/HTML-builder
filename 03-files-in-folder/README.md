## Displaying Information about Files Stored in a Folder

In the `index.js` file of the `03-files-in-folder` directory, develop a script that outputs information about files contained in the `secret-folder` to the console.

### Requirements

- [ ] When executing the command `node 03-files-in-folder` <u>in the root directory of the repository</u>, information about files contained directly within `03-files-in-folder/secret-folder` should be displayed in the console.  
       The data should be presented in the format `<file name>-<file extension>-<file size>`.  
       Example: `example - txt - 128.369kb`.
      _Note: no rounding for file size is necessary; conversion to kB is optional!_

- [ ] Information should only be displayed for files located in `03-files-in-folder/secret-folder`. The presence of information about directories is considered an error.

### Objectives

- Learn to obtain information about files.

### Description

Steps to complete the task:

1. Import all required modules.
2. Read the contents of the secret-folder.
3. Retrieve data for each object within the secret-folder.
4. Check if the object is a file.
5. Display file data in the console.

### Tips

Check [this article](https://www.freecodecamp.org/news/what-is-gitkeep/) to fill in possible gaps in understanding how git works and to eliminate questions about reading files in subfolders.

To read the contents of a folder, use the [readdir function](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fspromisesreaddirpath-options) from the **fs/promises module**. This function allows you to get the names of all files in a specified directory.

After reading the folder's contents, if you set the option `{withFileTypes: true}`, each object in it will be represented as an instance of the [Dirent class](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fs_class_fs_dirent). Its methods will help you determine whether the object is a file.

To determine the file extension, you can use the [extname method](https://nodejs.org/api/path.html#path_path_extname_path) of the **path module**.

Use [stat](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsstatpath-options-callback) to obtain information about a file.  
You can see the full list of data returned by this function in the documentation. Note that the object returned by this function is an instance of the [Stats class](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fs_class_fs_stats), which also has methods to check whether the object is a file.

##### Useful Links

_If you're looking for the information in Russian, please note that translations of documentation into Russian may be outdated and may not contain all the modern features of the modules.
For up-to-date information, always use the official documentation!_

- [Node.js file stats](https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats)
- [Node.js fs.readdir() Method](https://www.geeksforgeeks.org/node-js-fs-readdir-method/)
- [Working with folders in Node.js](https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs)

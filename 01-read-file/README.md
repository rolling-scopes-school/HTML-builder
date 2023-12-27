## Reading a File with Console Output

In the file `index.js` within the directory `01-read-file`, develop a script that outputs the contents of the file `text.txt` to the console.

### General Rules

- The use of any third-party modules is prohibited.
- Each task must be executed <u>in the root directory</u> using the command `node <task folder name>`.
- The use of synchronous functions from the **fs module**, such as `fs.statSync(path[, options])`, `fs.readFileSync(path[, options])`, and others found in the [synchronous API section](https://nodejs.org/api/fs.html#fs_synchronous_api), is prohibited.

### Requirements

- [ ] Inside the folder `01-read-file`, there are 2 files, `index.js` and `text.txt`.
- [ ] When executing the command `node 01-read-file` <u>in the root directory of the repository</u>, the contents of the file `text.txt` should be printed to the console.
- [ ] Synchronous file reading methods should not be used in the code.
- [ ] File reading should occur using **ReadStream**.

### Objectives

- Get acquainted with the basics of working with the file system on the Node.js platform.
- Learn the basics of streams and events.
- Familiarize yourself with the Path module and learn to use it to construct absolute paths to files.

### Description

In this task, you are required to develop a small script that outputs the contents of a pre-prepared text file to the console. You can follow these steps:

1. Import the necessary modules for task execution:

- To interact with the file system in Node.js, use the [fs module](https://nodejs.org/api/fs.html#fs_file_system).
- For correctly specifying the file path, you will need the [Path module](https://nodejs.org/api/path.html#path).

2. Create a new **ReadStream** from the file `text.txt`.
3. Direct the read stream to the standard output stream.

### Tips

For imports in Node.js, use [CommonJS modules](https://nodejs.org/docs/latest/api/modules.html#modules_modules_commonjs_modules).  
Despite the fact that Node.js now has almost full support for **ECMAScript modules** (`import/export`), this approach is not yet fully stable, and the vast majority of code you encounter will be written using CommonJS:

```js
const fs = require('fs');
```

For reading the file, you will use [streams](https://nodejs.org/api/stream.html#readable-streams), which are an important and useful part of the platform. Thanks to them, you can process large amounts of data chunk by chunk on the fly, while consuming a minimal amount of resources, instead of loading them into memory entirely. In your future work, you will encounter them repeatedly.

It's crucial to familiarize yourself with another fundamental concept in Node.js: **Events**. Node.js extensively uses events, and most objects are instances of the `EventEmitter` class. Understanding streams' operation is greatly enhanced by first getting to know events, as every stream is a descendant of `EventEmitter`.
Materials on these topics are also attached in the [Useful Links section](#useful-links).

When creating a **ReadStream**, pay attention to the fact that the command to run your code should be executed <u>in the root directory of the repository</u>. Therefore, it is important to correctly pass the file path for reading.  
Node.js, in the case of passing a relative path to the file like `./text.txt`, will look for it relative to the directory <u>in which the process was started</u>.  
The [join function](https://nodejs.org/api/path.html#path_path_join_paths) from the **Path module** allows you to create a full path to the text file based on the variable `__dirname`, which stores the path to the directory where your script file is located. Thus, the directory from which you run the code will not affect the location of the required file, and you will always refer to `text.txt` located next to `index.js`.  
The [Path module](https://nodejs.org/api/path.html) also contains other useful functions for manipulating paths, so I strongly recommend studying its capabilities.

You will have several options for directing your read stream to the [standard output stream](https://en.wikipedia.org/wiki/Standard_streams) (i.e., the console). You can use both the high-level [console.log()](https://nodejs.org/api/console.html#console_console_log_data_args) and work directly with the output stream [process.stdout](https://nodejs.org/api/process.html#process_process_stdout).

##### Useful Links

_If you're looking for the information in Russian, please note that translations of documentation into Russian may be outdated and may not contain all the modern features of the modules.  
For up-to-date information, always use the official documentation!_

- Events:
  - [Understanding Node.js Event-Driven Architecture](https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/)
  - [The Node.js Event emitter](https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter)
  - [Events](https://nodejs.org/api/events.html)
  - [Events in Node.js](https://medium.com/@diego.coder/events-in-node-js-76fbe1b6cdad)
- Streams:
  - [Stream](https://nodejs.org/api/stream.html)
  - [fs.createReadStream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)
  - [Understanding Streams in Node.js](https://nodesource.com/blog/understanding-streams-in-nodejs/)
  - [Node.js Streams: Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
- Path:
  - [Path](https://nodejs.org/api/path.html)
  - [Node.js Path Module](https://www.javascripttutorial.net/nodejs-tutorial/nodejs-path-module/)
- Process:
  - [Process](https://nodejs.org/api/process.html)
  - [Node Process Object Explained](https://www.freecodecamp.org/news/node-process-object-explained/)

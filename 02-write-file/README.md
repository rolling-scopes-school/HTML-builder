## Writing Console Input to File

In the `index.js` file in the `02-write-file` directory, develop a script that outputs a greeting to the console, waits for text input, and writes the entered text to a file.

### General Rules

- The use of any third-party modules is prohibited.
- Each task must be executed <u>in the root directory</u> using the command `node <task folder name>`.
- The use of synchronous functions from the **fs module**, such as `fs.statSync(path[, options])`, `fs.readFileSync(path[, options])`, and others found in the [synchronous API section](https://nodejs.org/api/fs.html#fs_synchronous_api), is prohibited.

### Requirements

- [ ] Inside the `02-write-file` folder, there is 1 file `index.js`.
- [ ] When executing the command `node 02-write-file` <u>in the root directory of the repository</u>, a text file is created in the `02-write-file` folder, and a prompt for text input is displayed in the console (the text of prompt is of your choice).
- [ ] After entering text, the entered text should be written to the previously created file in the `02-write-file` directory. The process does not terminate and awaits new input.
- [ ] After the next input, the initially created text file is appended with new text, and the process continues to wait for input.
- [ ] When pressing the `ctrl + c` key combination or entering `exit` into the console, a farewell phrase is displayed (the text of farewell phrase is of your choice), and the process terminates.

### Objectives

- Strengthen understanding of the basics of working with events and streams in Node.js.
- Work with the global **process** object.

### Description

In this task, you will develop a program that reads your console input until the process is forcibly terminated with `ctrl + c` or the keyword `exit` is entered.

The steps to complete the task are as follows:

1. Import all required modules.
2. Create a writable stream to a text file.
3. Display a welcome message in the console.
4. Wait for user input, with subsequent checking for the presence of the keyword `exit`.
5. Write the entered text to the file.
6. Wait for further input.
7. Implement a farewell message when the process is stopped.

### Tips

To successfully complete this task, you will need to apply your knowledge of events and streams that you have acquired previously. Additionally, an understanding of the global **process** object and its capabilities is essential. Utilizing its events allows you to intercept signals sent to the process, such as the `ctrl + c` interrupt command.

Reading anything from a stream using the **Readline module** can be helpful. The standard input stream `stdin`, being a **ReadableStream**, is well-suited for this.

##### Useful Links

_Please note, if you are seeking information in Russian, be aware that translations of the documentation may be outdated. They might not include all the latest features of the modules. For the most current and accurate information, always refer to the official documentation!_

- Process:
  - [Process](https://nodejs.org/api/process.html)
  - [Node Process Object Explained](https://www.freecodecamp.org/news/node-process-object-explained/)
  - [Signal events](https://nodejs.org/api/process.html#process_signal_events)
  - [Node.js Process Signal Events](https://www.geeksforgeeks.org/node-js-process-signal-events/)
- Readline:
  - [Readline](https://nodejs.org/api/readline.html)
  - [Node.js Readline() Module](https://www.geeksforgeeks.org/node-js-readline-module/)
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
- Path Module:
  - [Path](https://nodejs.org/api/path.html)
  - [Node.js Path Module](https://www.javascripttutorial.net/nodejs-tutorial/nodejs-path-module/)

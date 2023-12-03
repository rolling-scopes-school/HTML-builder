## Writing Console Input to File

In the `index.js` file in the `02-write-file directory`, write a script that outputs a greeting to the console, waits for text input, and writes the entered text to a file.

### General Rules

- The use of any third-party modules is prohibited.
- Each task must be executed <u>in the root directory</u> using the command `node <task folder name>`.
- The use of synchronous functions from the **fs module**, such as `fs.statSync(path[, options])`, `fs.readFileSync(path[, options])`, and others found in the [synchronous API section](https://nodejs.org/api/fs.html#fs_synchronous_api), is prohibited.

### Requirements

- [ ] Inside the `02-write-file folder`, there is 1 file `index.js`.
- [ ] When executing the command `node 02-write-file` <u>in the root directory of the repository</u>, a text file is created in the `02-write-file` folder, and a prompt for text input is displayed in the console (the text of prompt is of your choice).
- [ ] After entering text, the entered text should be written to the previously created file in the `02-write-file directory`. The process does not terminate and awaits new input.
- [ ] After the next input, the initially created text file is appended with new text, and the process continues to wait for input.
- [ ] When pressing the `ctrl + c` key combination or entering `exit` into the console, a farewell phrase is displayed (the text of farewell phrase is of your choice), and the process terminates.

### Objectives

- Strengthen understanding of the basics of working with events and streams in Node.js.
- Work with the global **process** object.

### Description

In this task, you will write a program that reads your console input until the process is forcibly terminated with `ctrl + c` or the keyword `exit` is entered.

The steps to complete the task are as follows:

1. Import all required modules.
2. Create a writable stream to a text file.
3. Display a welcome message in the console.
4. Wait for user input, with subsequent checking for the presence of the keyword `exit`.
5. Write the entered text to the file.
6. Wait for further input.
7. Implement a farewell message when the process is stopped.

### Tips

To successfully complete this task, you will need knowledge of events and streams acquired earlier, as well as an understanding of the capabilities of the global **process** object. By using its events, you can intercept signals sent to the process, such as pressing `ctrl + c`.

Reading anything from a stream using the **Readline module** can be helpful. The standard input stream `stdin`, being a **ReadableStream**, is well-suited for this.

##### Useful Links

_If you're looking for the information in Russian, please note that translations of documentation into Russian may be outdated and may not contain all the modern features of the modules.
For up-to-date information, always use the official documentation!_

// TODO: update links

- Process:
  - [Process](https://nodejs.org/api/process.html)
  - [Process перевод на русском (nodejsdev.ru)](https://nodejsdev.ru/api/process/)
  - [Signal events](https://nodejs.org/api/process.html#process_signal_events)
  - [Сигнальные события (nodejsdev.ru)](https://nodejsdev.ru/api/process/#signal-events)
- Readline:
  - [Readline](https://nodejs.org/api/readline.html)
  - [Readline на русском (nodejsdev.ru)](https://nodejsdev.ru/api/readline/)
- События:
  - [События от Metanit](https://metanit.com/web/nodejs/2.9.php)
  - [Understanding Node.js Event-Driven Architecture (FreeCodeCamp)](https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/)
  - [Event emitter](https://nodejs.dev/learn/the-nodejs-event-emitter)
  - [Перевод документации Events (nodejsdev.ru)](https://nodejsdev.ru/api/events/)
  - [События гайд (nodejsdev.ru)](https://nodejsdev.ru/guide/events/)
- Потоки:
  - [Stream](https://nodejs.org/api/stream.html)
  - [fs.createReadStream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)
  - [Потоки (nodejsdev.ru)](https://nodejsdev.ru/api/stream/)
  - [Pipe (nodejsdev.ru)](https://nodejsdev.ru/guide/pipe/)
  - [Stream от Metanit](https://metanit.com/web/nodejs/2.10.php)
  - [Pipe от Metanit](https://metanit.com/web/nodejs/2.11.php)
- Модуль Path:
  - [Path](https://nodejs.org/api/path.html)
  - [Path перевод на русский](https://nodejsdev.ru/api/path/)

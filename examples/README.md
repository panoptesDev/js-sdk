# Example

This folder contains different example for different cases. All example are nodejs script, so can be easily run by `node` command.

- pos - pos folder contains examples related to pos api for EVM chain
- tron - pos folder contains examples related to pos api for TRON

## How to use

### 1. Set configuration

Open `config.js` and set the keys like `privateKey`, `address` in user1, parent rpc etc.

There are some prefilled data in `config.js` but feel free to change anything as per your needs.

**Note:** - Be careful with your private key, Use a key you are comfortable with for development purpose. And try not to make it public by doing actions such as commiting to repo or referencing on any online site.

### 2. Install package

install related package by runing command -

```
npm i
```

**Note:-** Make sure you are inside examples folder.

### 3. Run script

run any example script by using

```
node <file_path>
```

let's run a erc20 balance example

```
node pos/erc20/balance.js
```

## Run example using source code

This section helps you to run the example code with current source code. Generally it is needed for debugging purpose.

### 1. Build & link source code

Run the below command inside root of this project.

```
npm run build:link
```

You might get permission issue, in this case run the command using `sudo`.

### 2. Link the library

#### 2.1 Move into examples folder

```
cd examples
```

#### 2.2 run link command

```
npm run link:lib
```

# UI Test Automation Framework
This framework is using WebdriverIO as testing tool, JavaScript as programming language and Mocha Framework.

### Requirements:
-   node >= 12.18.x : [How to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x : [How to install NPM](https://www.npmjs.com/get-npm)


### Getting Started:
Clone Repository
```bash
1. Fork this repository
2. git clone https://github.com/<username>/WebdriverIOVolvoProject.git
3. Navigate to WebdriverIOVolvoProject
```

Install the dependencies
```bash
npm install
```

Run tests in chrome:
```bash
npm test
```

Generate mochawesome report:
```bash
Genarate Report: npm run report
Report Path: <RootProject>\mochawesome-report\mochawesome-report.html
```

To build the Docker container you can run:
```bash
$ docker build -t mytest -f Dockerfile .
```

To run the tests in docker, execute:
```bash
$ docker run -it mytest
```

### Key Features
    - Test Data Driven
	- Mochawesome report
    - Parallel execution
    - Cross Browser Testing
    - Page Object Design pattern
	- Failed test retry mechanism
    - WebdriverIO async mode support
	
### Folder Structure
```
├───src
|    ├───drivers
|    |      └───chromedriver_win32.zip
|    |
|    ├───pages (all element locators and related action methods)
|    |      
|    └───utils
|          └───commands.js
├───test
|    ├───constants (Error messages, labels, text, any constant values)
|    |───resources
|    |       └───testdata (test data required to pass as input)
|    └───specs (all mocha tests will go here)
|
├───babel.config.js
├───jsconfig.json (javascript related configurations)
├───package.json (all dependencies and scripts)
├───README.md
└───wdio.conf.js (cofiguration file) 
```


### Sample Report
![image](https://user-images.githubusercontent.com/66773365/124929395-1754b480-e01e-11eb-956b-6c953ca9f938.png)


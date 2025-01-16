# Company Overview: Polestar
#### Website: [Polestar](https://www.polestar.com/se)

### About Polestar 

Polestar is a premium electric vehicle (EV) manufacturer focused on producing sustainable and innovative electric mobility solutions. Headquartered in Gothenburg, Sweden, Polestar is a subsidiary of Volvo Car Group and Zhejiang Geely Holding. The company aims to redefine performance and sustainability in the automotive industry through cutting-edge design, advanced technology, and environmentally conscious practices.


### Core Offerings

1. #### Electric Vehicles (EVs):

- Polestar 1
- Polestar 2 
- Polestar 3
- Polestar 4 

2. #### Sustainable Mobility Solutions
3. #### Advanced Technology Integration


##  Prerequisites for Playwright Framework

### 1. Node.js and npm
Playwright requires Node.js and npm (Node Package Manager) for managing dependencies.

Install Node.js:
Download and install from the official website: [Node.js](https://nodejs.org/en)

### 2. VS Code

A code editor like Visual Studio Code (VSCode) is recommended for efficient JavaScript development.

Download VS Code using this link [VS Code](https://code.visualstudio.com/download)

### 3. Playwright Setup

Once Node.js is installed, you'll need to install Playwright and its dependencies.

_npm init playwright@latest_

install playwright plugin from extention.

_Playwright Test for VSCode_

### 4. Load Testing Using k6

k6 is a modern load-testing tool designed for API and performance testing.

**Key Features:**

Written in JavaScript.
Highly performant and optimized for scalability.
Easy integration with CI/CD pipelines.
Supports complex scenarios (e.g., user authentication, data-driven testing).

> ### Install k6

Official website: [K6 Website](https://k6.io/)

Install K6 Using Chocolatey, open cmd and hit below coomand 

```
 choco install k6 
```
if they are asking to install chocolatey, Run the following command to install Chocolatey

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

```

Verify Installation: 

```
k6 version
```
create seperate folder name k6, in k6 create file k6get.js

` k6get.js `

```
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 }, // Ramp-up to 10 users
    { duration: '1m', target: 10 },  // Stay at 10 users
    { duration: '10s', target: 0 },  // Ramp-down to 0 users
  ],
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 200ms': (r) => r.timings.duration < 200,
  });
  sleep(1);
}

```

to run above code use below command 

```
k6 run k6get.js
```


# Framework Overview

This workflow combines Playwright (for functional and API testing), TypeScript (for strong typing and better development experience), and k6 (for load testing). Below is an overview of how these tools complement each other and how they can be used together:

### Playwright with TypeScript
Playwright is a powerful framework for automating browsers, and TypeScript enhances it with static typing, better code completion, and maintainability.

**Key Features**

End-to-end testing for UI and APIs.
Cross-browser support (Chromium, Firefox, WebKit).
Built-in TypeScript support for writing strongly-typed test cases.
Native API testing capabilities with request.

### API Testing with Playwright
Playwright provides a request object to perform API tests directly. It supports:

Making HTTP requests (GET, POST, PUT, DELETE).

Validating response status codes, headers, and payloads.
Integration with functional UI tests to validate end-to-end workflows.

### Load Testing with k6
k6 is a modern load-testing tool designed for API and performance testing.

**Key Features:**

Written in JavaScript.
Highly performant and optimized for scalability.
Easy integration with CI/CD pipelines.
Supports complex scenarios (e.g., user authentication, data-driven testing).


# Playwright Framework Setup
To set up Playwright, you need to meet a few prerequisites. Here’s a list of the necessary requirements for installation:
### Pre Requisites  - 
1. Java 
2. Vs Code 
3. node js

---

> ### 1. Install java 

To Install java [Click Here](https://www.oracle.com/in/java/technologies/downloads/#jdk22-windows)


```
select windows as OS 

click link behind x64 Installer

open downloaded file > double click on it > Next > Close
```
`Now we have to set path in env variable.`
```
select path from file location upto bin as below
C:\Program Files\Java\jdk-22\bin

Goto env variable > system variable > path > add path.
```
`Check java is installed or not`
```
Open cmd > java --version 
         > javac --version
```
---
>### 2. Vs Code 

[Click here](https://code.visualstudio.com/download) for vs code installation

---
>### 3. node js

[click here](https://nodejs.org/en/download) for node js installation

Playwright requires Node.js version 12 or above.
To check your Node.js version
```
node -v
npm -v
```

---

We have installed all Pre Requisites, we can start with playwright framework, 


1. Create folder `Playwright Framework` at any place lets say desktop,

2. Open Vs code, 

    - File > Open folder > select `Playwright Framework`

    - click `extensions` (side vertical bar) >  
    install `Playwright Test for VSCode`,

    - Terminal > New Terminal > Hit below first command to create project
    ```
   npm init playwright@latest


   ```
---
## API Testing Playwright setup

#### Create `backend/tests/api.spec.ts` in project

`api.spec.ts`

```
import {expect, test} from '@playwright/test'

var userid;

test.describe('REST API Tests with ReqRes', () => {

test('apiGet',async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
});

test('apiPost',async ({request}) => {
    const response = await request.post('https://reqres.in/api/users',

                                         {
                                            data:{"name":"Deepak","job":"QA" },
                                            headers:{"Accept":"application/json "}
                                        });
    console.log(await response.json())
    expect(response.status()).toBe(201)   
    
    var ser = await response.json();
    userid=ser.id
})

test('apiPut',async ({request}) => {
    const response = await request.put('https://reqres.in/api/users/'+userid,

        {
            data:{"name":"Deepak","job":"Billionaire" },
            headers:{"Accept":"application/json "}
        });

    console.log(await response.json())
    expect(response.status()).toBe(200)   

})

    test('apiDelete',async ({request}) => {
     await request.delete('https://reqres.in/api/users/'+userid)

    })

});
```

### make below chnages in `playwright.config.js` file

```
module.exports = defineConfig({
  testDir: '.',
```

Run api test with below command 

Below command will ***excecute all tests*** within `api.spec.ts` file

```
npx playwright test ./backend/tests/api.spec.ts
``` 

Excecute specific test within file

```
 npx playwright test -g "apiGet"
```

Excecute all tests within project( `api`,`UI` )

```
npx playwright tests
```
---


### Setup k6:
Install k6: Follow the official installation guide at [k6.io](https://k6.io/)


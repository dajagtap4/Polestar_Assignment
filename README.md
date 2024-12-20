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

#### Install k6

Official website: [K6 Website](https://k6.io/)

On Windows, use:  _choco install k6_

Verify Installation: k6 version

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

### Setup k6:
Install k6: Follow the official installation guide at [k6.io](https://k6.io/)

Create a k6 Script: Example API Load Test:



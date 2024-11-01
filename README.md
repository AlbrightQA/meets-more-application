## Intentions Moving Forward

When hired, I plan to focus on the following key areas to enhance the quality assurance process:

- **Work with stakeholders** to identify critical test flows and automate those first.
- **Implement Secrets Manager** to obfuscate sensitive data.
- **Collaborate with development** to implement data-testid's on existing elements and all elements going forward for better test targeting.
- **Train QA team** on how to effectively use the Playwright project to maximize its benefits.
- **Advocate for inline testing** to ensure that tests are closely integrated with the codebase, allowing for immediate feedback on changes and reducing the likelihood of regressions.

## Overview
The **Meets More Application** project is a Playwright repository designed to test the frontend and API of the Meets More application, and to demonstrate what benefits Evan Albright can bring to the team.

## Features

This project includes quality of life features that enhance the development and testing experience:

- **GitHub Workflow**: Automatically runs tests on commit, ensuring code quality and reducing manual testing efforts.
- **Global Setup**: A `global.setup` script that logs in, saves the storage state, and stores the authentication token for future use, facilitating seamless API testing.
- **Utility Functions**: A `utilities` folder containing helper functions for common tasks such as context creation, API requests, and more.
- **Auto-Formatting**: Automatically corrects indentation, missing semicolons, unused imports, and other formatting issues, ensuring consistent code style and reducing formatting issues.

## Getting Started
These instructions will help you set up the project locally for development and testing purposes.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 22.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [VS Code](https://code.visualstudio.com/) (recommended)

## Installation
1. Clone the repository:
```bash
git clone https://github.com/AlbrightQA/meets-more-application.git
```

2. Install dependencies:
```bash
cd meets-more-application/integration
npm install
```

3. (Optional) Install recommended VS Code extensions:
   - Open the project in VS Code.
   - You will be prompted to install recommended extensions. Accept the prompt.

## Configuration
To set up the necessary storage state files for the project, you need to create the following files in the `integration/storageState` directory:

1. **BusinessAccessToken.json**
2. **BusinessLoginState.json**

You can create these files using the following commands:

```bash
cd integration && mkdir -p storageState && cd storageState
New-Item -Name BusinessAccessToken.json -ItemType File
New-Item -Name BusinessLoginState.json -ItemType File
```

After creating these files, global.setup will be able to store the necessary information.

### Running Tests
Run the tests using the following commands:
```bash
cd integration
npx playwright test /tests
```
To target a specific test file, use the following command. Replace `<path-to-your-test-file>` with the relative path to the test file you want to run:
```bash
npx playwright test <path-to-your-test-file>
```
For example:
```bash
npx playwright test /tests/frontend/service/yourTestFile.spec.ts
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

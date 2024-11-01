## Intentions Moving Forward

If hired, I plan to focus on the following key areas to enhance the quality assurance process:

- **Work with stakeholders** to identify critical test flows and automate those first.
- **Implement Secrets Manager** to obfuscate sensitive data.
- **Implement API testing** to ensure backend reliability.
- **Push for data-testid's** to be used on all elements going forward for better test targeting.
- **Collaborate with development** to add data-testid's to existing elements for consistency.
- **Train QA team** on how to effectively use the Playwright project to maximize its benefits.

## Overview
The **Meets More Integration** project is a Playwright repository designed to test the frontend of the Meets More application. This repository includes configurations for consistent coding styles and formatting across different environments.

## Quality of Life Features

This project includes several quality of life features that enhance the development and testing experience:

- **GitHub Workflow**: Automatically runs tests when committing to a pull request, ensuring code quality and reducing manual testing efforts.
- **Global Setup**: A `global.setup` script that logs in, saves the storage state, and stores the authentication token for future use, facilitating seamless API testing.
- **Auto-Formatting**: Automatically corrects indentation, missing semicolons, unused imports, and other formatting issues, ensuring consistent code style and reducing formatting issues.
- **Utility Functions**: A `utilities` folder containing helper functions for common tasks such as date formatting, API requests, and more.

## Getting Started
These instructions will help you set up the project locally for development and testing purposes.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version X.X.X)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [VS Code](https://code.visualstudio.com/) (recommended)

## Installation
1. Clone the repository:
```bash
git clone https://github.com/AlbrightQA/meets-more-integration.git
cd meets-more-integration
```

2. Install dependencies:
```bash
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
cd integration/storageState
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
Or to target a specific test:
```bash
npx playwright test /tests/frontend/service/verifyServiceList.spec.ts
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
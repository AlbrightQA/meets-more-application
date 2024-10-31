# Meets More Integration

## Overview
The **Meets More Integration** project is a Playwright repository designed to test the frontend of the Meets More application. This repository includes configurations for consistent coding styles and formatting across different environments.

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
- **EditorConfig**: The project includes a `.editorconfig` file to maintain consistent coding styles across different editors.
- **VS Code Settings**: The `.vscode/settings.json` file contains specific settings for VS Code users, including:
  - Automatic formatting on save
  - Semicolon enforcement
  - Indentation and line length settings

### Important Settings
- **Max Line Length**: Lines longer than 100 characters will be visually indicated and wrapped.
- **Trailing Whitespace**: Extra spaces will be trimmed on save.
- **Semicolon**: Semicolons will be inserted upon saving.

## Usage
To run the project, use the following command:
```bash
npm start
```

### Running Tests
To run the tests, navigate to the `integration` directory and use the following command:
```bash
cd integration
npx playwright test /tests
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
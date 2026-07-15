# Kaur_Kiranpreet_Coding_Assignment13

## Overview

This project is an updated React UI Component Library created for WEBD-3012 Business Systems Build and Testing.

Assignment 13 extends Assignment 12 by adding code quality checks and continuous integration to the development process. The project uses Husky pre-commit hooks, Prettier, ESLint, React tests, GitHub Actions, and Docker to ensure code quality before deployment.

---

## Features

The UI Component Library includes the following reusable components:

- Button
- Label
- Text
- Dropdown
- RadioButton
- Img
- HeroImage
- Card
- Table
- TableHeader
- TableRow
- TableCell
- TableFooter

---

## Code Quality Checks

The project automatically performs the following quality checks:

- Prettier formatting check
- ESLint code quality check
- React unit tests
- Production build verification

---

## Husky Pre-Commit Hook

Husky is configured to prevent commits if any quality check fails.

Before every commit, Husky automatically runs:


bash
npm run check


The command executes:


bash
npm run format
npm run lint
npm test -- --watchAll=false


If any of these checks fail, the commit is blocked until the issues are fixed.

---

## GitHub Actions

GitHub Actions is configured to automatically run quality checks whenever code is pushed to GitHub or a Pull Request is created.

The workflow performs the following:

- Install project dependencies
- Run Prettier
- Run ESLint
- Run React tests
- Build the production application

This ensures the same quality checks are enforced even if local pre-commit hooks are bypassed.

---

## Docker Instructions

### Build the Docker image


bash
docker build -t kaur_kiranpreet_coding_assignment13 .


### Run the Docker container


bash
docker run --name kaur_kiranpreet_coding_assignment13 -p 8018:8018 kaur_kiranpreet_coding_assignment13


### Open the application


http://localhost:8018


---

## Docker Details

**Container Name**


kaur_kiranpreet_coding_assignment13


**Working Directory**


/kaur_kiranpreet_ui_garden_build_checks


**Port**


8018


---

## Project Structure


src/
components/
.storybook/
.github/workflows/
.husky/
Dockerfile
README.md
package.json


---

## Technologies Used

- React
- TypeScript
- Storybook
- Styled Components
- Husky
- Prettier
- ESLint
- Jest
- GitHub Actions
- Docker

---

## GitHub Repository

https://github.com/kiranpreet867/kaur_kiranpreet_coding_assignment13


---

## Author

Kiranpreet Kaur 
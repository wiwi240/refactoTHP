# RefactoTHP

`RefactoTHP` is a React refactoring exercise focused on component decomposition.

The original application started as a large class-based `App.js` mixing UI rendering, local data, modal markup, and interaction logic in a single file. The goal of this project is to turn that code into a simpler and more maintainable structure using function components and hooks.

## Project Goal

This project demonstrates how to:

- convert a class component into function components with hooks,
- move static JSON data outside of UI components,
- extract modal windows into dedicated components,
- remove duplicated rendering logic,
- keep data flow explicit by passing only the props each component actually needs.

## Features

The application displays:

- a user profile card,
- a publication gallery,
- a publication preview modal,
- a profile edit modal,
- an upload modal for picture metadata.

The edit, delete, and upload actions preserve the original alert-based behavior from the initial exercise.

## Project Structure

Main folders and files:

- `src/App.js`: top-level state orchestration and screen composition.
- `src/data/profileData.js`: initial profile and form data.
- `src/components/`: extracted UI components such as the profile card, publications section, and modals.
- `src/MentionsTagsComponent.js`: reusable mentions and hashtags input helper.

## Tech Stack

- React 16
- Ant Design 3
- Create React App

## Node Version

This project is expected to run with `Node.js 14.x`.

If `nvm` is not already available in your shell, load it first:

```bash
source ~/.nvm/nvm.sh
```

Then install and use Node 14:

```bash
nvm install 14
nvm use 14
```

## Run The Project

Run the project with these commands:

```bash
source ~/.nvm/nvm.sh
nvm install 14
nvm use 14
npm i
npm start
```

Create a production build:

```bash
npm run build
```

## Troubleshooting

If an error still appears after `npm start`, run:

```bash
npm update
```

Then try again:

```bash
npm start
```

## Why This Refactor Matters

This project is intentionally simple, but the refactor addresses real engineering problems:

- oversized components are harder to read and review,
- duplicated markup increases maintenance cost,
- inline modal code makes parent components noisy,
- colocating static data inside UI components hurts clarity,
- unnecessary props make components harder to reuse and reason about.

The result is not “more abstract” code. It is more focused code, with each component handling one clear responsibility.

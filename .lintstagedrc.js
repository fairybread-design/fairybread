const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildJestCommand = (filenames) =>
  `jest --findRelatedTests --passWithNoTests ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier --ignore-unknown --write ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

const buildStylelintCommand = (filenames) =>
  `stylelint --allow-empty-input --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

module.exports = {
  // TODO: Add this back in once stylelint is fixed
  // '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildStylelintCommand],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*': [buildPrettierCommand, buildJestCommand],
};

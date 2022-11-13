const glob = require('glob');
const StyleDictionaryPackage = require('style-dictionary');

const { formattedVariables } = StyleDictionaryPackage.formatHelpers;

const colorThemesPath = `src/color/themes/*.js`;
const colorThemeFiles = glob
  .sync(colorThemesPath)
  .map((filePath) =>
    filePath.replace('src/color/themes/', '').replace('.js', '')
  );

function getStyleDictionaryConfig(theme) {
  return {
    source: [
      'src/**.js',
      `src/color/palette.js`,
      `src/color/themes/${theme}.js`,
    ],
    format: {
      'javascript/variables': function ({ dictionary, options = {} }) {
        const { outputReferences } = options;

        return `const variables = \`
${formattedVariables({
  format: 'css',
  dictionary,
  outputReferences,
})}
\`;
export default variables;`;
      },
      'javascript/token-mapping': function ({ dictionary }) {
        return `const variables = {
${dictionary.allTokens
  .map((token) => {
    return `  '${token.name}': 'var(--eds-${token.name})'`;
  })
  .join(',\n')}
};
export default variables;`;
      },
    },
    transform: {
      // Remove 'default' from token names
      'name/remove-default': {
        type: 'name',
        transformer: (token) => {
          return token.name.replaceAll('-default', '');
        },
      },
      // Separates token path names with dashes, but retains camelCase
      // E.g. 'typography-heading-lineHeight'
      'name/token-naming': {
        type: 'name',
        transformer: (token, config) => {
          return `${config?.prefix ? `${config.prefix}-` : ''}${token.path.join(
            '-'
          )}`;
        },
      },
      'value/unit-transform': {
        type: 'value',
        transformer: (token) => {
          if (token.attributes?.type === 'px') {
            return `${token.value}px`;
          } else if (
            typeof token.value === 'string' &&
            token.value.includes(' ')
          ) {
            // Safely adds apostrophes if there is a space in the value
            // E.g. for a font family: 'Times New Roman'
            return `'${token.value}'`;
          }

          return token.value;
        },
      },
    },
    platforms: {
      size: {
        prefix: 'eds',
        buildPath: 'build/variables/',
        transforms: [
          'attribute/cti',
          'name/token-naming',
          'name/remove-default',
          'value/unit-transform',
        ],
        files: [
          {
            destination: 'size.tsx',
            format: 'javascript/variables',
            filter: {
              attributes: {
                category: 'size',
              },
            },
          },
        ],
      },
      space: {
        prefix: 'eds',
        buildPath: 'build/variables/',
        transforms: [
          'attribute/cti',
          'name/token-naming',
          'name/remove-default',
          'value/unit-transform',
        ],
        files: [
          {
            destination: 'space.tsx',
            format: 'javascript/variables',
            filter: {
              attributes: {
                category: 'space',
              },
            },
          },
        ],
      },
      typography: {
        prefix: 'eds',
        buildPath: 'build/variables/',
        transforms: [
          'attribute/cti',
          'name/token-naming',
          'name/remove-default',
          'value/unit-transform',
        ],
        files: [
          {
            destination: 'typography.tsx',
            format: 'javascript/variables',
            filter: {
              attributes: {
                category: 'typography',
              },
            },
          },
        ],
      },
      color: {
        prefix: 'eds',
        buildPath: 'build/variables/',
        transforms: [
          'attribute/cti',
          'name/token-naming',
          'name/remove-default',
          'value/unit-transform',
        ],
        files: [
          {
            destination: `color/${theme}.tsx`,
            format: 'javascript/variables',
            filter: {
              attributes: {
                category: 'color',
              },
            },
          },
        ],
      },
      'token-mapping': {
        buildPath: 'build/',
        transforms: [
          'attribute/cti',
          'name/token-naming',
          'name/remove-default',
        ],
        files: [
          {
            destination: `tokens.tsx`,
            format: 'javascript/token-mapping',
            filter: (token) => {
              return token.attributes.category !== 'palette';
            },
          },
        ],
      },
    },
  };
}

console.log('Build started...');

colorThemeFiles.map(function (theme) {
  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(theme)
  );

  StyleDictionary.buildAllPlatforms();
});

console.log('\n==============================================');
console.log('\nBuild completed!');

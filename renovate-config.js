module.exports = {
  token: process.env.GITHUB_ACCESS_TOKEN,
  platform: 'github',
  binarySource: 'global',
  onboardingConfig: {
    extends: ['config:base'],
  },
  repositories: ['hondash/sandbox-renovate'],
};

module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/franicon/wales.package.schema.git",
  plugins: [
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "docs/CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["docs/CHANGELOG.md"]
      }
    ],
  ]
}

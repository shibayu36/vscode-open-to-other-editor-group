* `git checkout main && git pull`
* Edit `version` in package.json.
* Add version history to CHANGELOG.md
* `vsce package`
* `code --install-extension open-to-other-editor-group-x.y.z.vsix` and check the operation.
* `git add package.json CHANGELOG.md && git commit && git tag vx.y.z && git push && git push --tags`
* `vsce publish`

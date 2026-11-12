# Release Workflow

This document explains how releases are automated across branches.

## Branch Strategy

### Feature Branches
- Used for developing new features or fixing bugs
- Branch naming: `feature/description`, `bugfix/description`, `hotfix/description`
- No automatic releases
- Create a Pull Request to `development` when ready

Example:
```bash
git checkout -b feature/improve-screenshot-cropping
# Make changes...
git push origin feature/improve-screenshot-cropping
# Create PR to development
```

### Development Branch
- Integration branch for testing
- Pre-release versions (optional)
- Version format: `1.0.0-dev` or `1.0.0-beta.1`
- Creates a pre-release on GitHub (marked as beta/pre-release)
- Not ready for Edge Store or Chrome Web Store

Workflow:
1. Create PR from feature branch to development
2. Review and merge
3. Update version in manifest.json (e.g., `"version": "1.0.0-beta.1"`)
4. Commit: `git push origin development`
5. GitHub Actions automatically creates a pre-release

### Main Branch
- Production-ready releases only
- Version format: `1.0.0`, `1.0.0.2`, `1.0.0.3`, etc.
- Creates a stable GitHub Release (marked as latest)
- Ready to upload to Edge Store and Chrome Web Store
- Signed with latest tag

Workflow:
1. Create PR from development to main
2. Review thoroughly
3. Update version in manifest.json (e.g., `"version": "1.0.0.3"`)
4. Merge PR
5. GitHub Actions automatically:
   - Creates git tag (v1.0.0.3)
   - Creates GitHub Release
   - Packages extension zip
   - Attaches zip to release

## How to Release

### Releasing to Development (Testing)

1. Create feature branch:
```bash
git checkout -b feature/my-improvement
# Make changes...
git add .
git commit -m "feat: add my improvement"
git push origin feature/my-improvement
```

2. Create Pull Request on GitHub (to development branch)

3. Review and merge

4. On development branch, update version:
```bash
git checkout development
git pull origin development
# Edit manifest.json, update version to 1.0.0-beta.1
git add manifest.json
git commit -m "chore: bump version to 1.0.0-beta.1"
git push origin development
```

5. GitHub Actions automatically creates a pre-release at https://github.com/rowdynl/d365fo-task-recorder-screenshot-extension/releases

### Releasing to Production (Main)

1. Create PR from development to main on GitHub

2. Review all changes carefully

3. Merge PR

4. On main branch, update version:
```bash
git checkout main
git pull origin main
# Edit manifest.json, update version to 1.0.0.3 (or whatever version)
git add manifest.json
git commit -m "chore: bump version to 1.0.0.3"
git push origin main
```

5. GitHub Actions automatically:
   - Creates tag v1.0.0.3
   - Creates release with zip file
   - Marks it as latest

6. Download zip from GitHub Release

7. Upload to:
   - Microsoft Edge Store
   - Chrome Web Store

## Automatic Actions

### When you push to development:
- If manifest.json version changed
- GitHub Actions creates a **pre-release**
- Marked as "Development/beta release for testing"
- Zip file generated and attached
- Pre-release flag means it's not the latest stable version

### When you push to main:
- If manifest.json version changed
- GitHub Actions creates a **production release**
- Marked as "Production release"
- Zip file generated and attached
- Automatically tagged as "latest"

## Version Numbering

### Development Versions
- `1.0.0-beta.1` (pre-release)
- `1.0.0-dev` (development)
- `1.0.0-rc.1` (release candidate)

### Production Versions
- `1.0.0.0` (initial release)
- `1.0.0.1` (patch - bug fix)
- `1.0.0.2` (patch)
- `1.0.1.0` (minor - new feature)
- `2.0.0.0` (major - breaking changes)

## Merging Between Branches

### Feature → Development
```bash
git checkout development
git pull origin development
git merge --no-ff feature/my-improvement
git push origin development
```

### Development → Main
```bash
git checkout main
git pull origin main
git merge --no-ff development
git push origin main
```

Use `--no-ff` to keep a clean merge history.

## Important Notes

- Version changes are the trigger for releases
- Only push to development or main when you want a release
- Feature branches never create releases
- Pre-releases on development are for testing only
- Only production releases on main should be uploaded to stores
- Always test in development before merging to main

## Troubleshooting

**Release didn't create automatically:**
- Check that manifest.json version actually changed
- Verify you pushed to development or main branch
- Check GitHub Actions log in repository Settings > Actions

**Duplicate releases:**
- Don't manually create tags if auto-release will create them
- The workflow checks if tag exists to prevent duplicates

**Wrong version tagged:**
- Edit manifest.json with correct version
- Manually delete the incorrect tag: `git push origin :refs/tags/vWRONG`
- Push again with correct version

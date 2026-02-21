# Plan for Repository Rename: schachtraining-lichess-discord → schachtraining-lichess

**GitHub Issue:** #16
**Date:** 2026-02-21

## Overview

Rename the repository from `schachtraining-lichess-discord` to `schachtraining-lichess` to better reflect the current focus of the project.

## Affected Components

1. **GitHub Repository**
   - Current: https://github.com/mliebelt/schachtraining-lichess-discord
   - Target: https://github.com/mliebelt/schachtraining-lichess

2. **Netlify Deployment**
   - Current: https://schachtraining-lichess-discord.netlify.app/
   - Target: https://schachtraining-lichess.netlify.app/

3. **Local Git Repository**
   - Remote URL needs updating

4. **Codebase References**
   - Configuration files
   - Documentation

## Step-by-Step Execution Plan

### Phase 1: Preparation (Local Changes)

**Step 1.1: Update Code References**

Files to modify:

1. `docusaurus.config.js`
   - Line 20: `projectName: "schachtraining-lichess-discord"` → `projectName: "schachtraining-lichess"`
   - Line 72: `href: "https://github.com/mliebelt/schachtraining-lichess-discord"` → `href: "https://github.com/mliebelt/schachtraining-lichess"`
   - Line 108: `href: "https://github.com/mliebelt/schachtraining-lichess-discord"` → `href: "https://github.com/mliebelt/schachtraining-lichess"`

2. `README.md`
   - Line 3: `https://schachtraining-lichess-discord.netlify.app/` → `https://schachtraining-lichess.netlify.app/`
   - Line 5: `https://app.netlify.com/sites/schachtraining-lichess-discord/deploys` → `https://app.netlify.com/sites/schachtraining-lichess/deploys`

3. `CLAUDE.md`
   - Line 105: `https://schachtraining-lichess-discord.netlify.app/` → `https://schachtraining-lichess.netlify.app/`

4. `docs/training.md`
   - Line 298: GitHub issue link `https://github.com/mliebelt/schachtraining-lichess-discord/issues/4` → `https://github.com/mliebelt/schachtraining-lichess/issues/4`

5. `package.json` (optional)
   - Line 2: `"name": "second"` → `"name": "schachtraining-lichess"` (optional, for consistency)

**Step 1.2: Commit Local Changes**

```bash
git add docusaurus.config.js README.md CLAUDE.md docs/training.md package.json
git commit -m "Update repository references for rename to schachtraining-lichess

Refs #16"
```

**Step 1.3: Push Changes to Current Repository**

```bash
git push origin main
```

### Phase 2: GitHub Repository Rename

**Step 2.1: Rename on GitHub**

1. Go to https://github.com/mliebelt/schachtraining-lichess-discord
2. Click on "Settings" tab
3. Scroll down to "Repository name" section
4. Change name from `schachtraining-lichess-discord` to `schachtraining-lichess`
5. Click "Rename"

**Important:** GitHub automatically sets up redirects from the old URL to the new URL, so existing links and clones continue to work.

**Step 2.2: Update Local Git Remote**

For SSH (recommended if you use SSH keys):
```bash
git remote set-url origin git@github.com:mliebelt/schachtraining-lichess.git
```

For HTTPS:
```bash
git remote set-url origin https://github.com/mliebelt/schachtraining-lichess.git
```

**Step 2.3: Verify Remote Update**

```bash
git remote -v
```

Should show (SSH):
```
origin  git@github.com:mliebelt/schachtraining-lichess.git (fetch)
origin  git@github.com:mliebelt/schachtraining-lichess.git (push)
```

Or (HTTPS):
```
origin  https://github.com/mliebelt/schachtraining-lichess.git (fetch)
origin  https://github.com/mliebelt/schachtraining-lichess.git (push)
```

### Phase 3: Netlify Site Rename

**Option A: Update Existing Netlify Site (Recommended)**

1. Log in to Netlify (https://app.netlify.com)
2. Navigate to the site (currently schachtraining-lichess-discord)
3. Go to "Site settings"
4. Under "Site information" → "Change site name"
5. Change to `schachtraining-lichess`
6. Save changes

New URL will be: https://schachtraining-lichess.netlify.app/

**Note:** Netlify will automatically redirect from the old URL to the new URL.

**Option B: Use Custom Domain (Alternative)**

If you want to avoid Netlify subdomain entirely, you could:
1. Register a custom domain
2. Point it to the Netlify site
3. Update `docusaurus.config.js` url field accordingly

### Phase 4: Verification

**Step 4.1: Verify GitHub Repository**

- Visit https://github.com/mliebelt/schachtraining-lichess
- Confirm it loads correctly
- Check that old URL redirects properly

**Step 4.2: Verify Netlify Deployment**

- Visit https://schachtraining-lichess.netlify.app/
- Confirm site loads correctly
- Check that old URL redirects (if kept)

**Step 4.3: Verify Local Repository**

```bash
git pull origin main
git status
```

**Step 4.4: Test Build Locally**

```bash
npm run build
npm run serve
```

Visit http://localhost:3000 and verify all links work correctly.

### Phase 5: Communication & Cleanup

**Step 5.1: Update Documentation**

- Update README.md badges if needed (should auto-update with Netlify)
- Verify all external links in docs still work

**Step 5.2: Close GitHub Issue**

Close issue #16 with a reference to the completion.

**Step 5.3: Communicate Changes (if applicable)**

- Notify workshop participants if needed
- Update any external references (bookmarks, shared links, etc.)

## Potential Issues & Mitigations

### Issue 1: Netlify Build Hooks
**Problem:** Build hooks in Netlify might still reference old repository name
**Mitigation:** Check Netlify build settings and update if necessary

### Issue 2: Existing Bookmarks
**Problem:** Users might have bookmarked old URL
**Mitigation:** Both GitHub and Netlify provide automatic redirects

### Issue 3: Package Name Mismatch
**Problem:** package.json has generic name "second"
**Decision:** Can optionally update to "schachtraining-lichess" for consistency (not critical since it's a private package)

### Issue 4: Hardcoded URLs in Content
**Problem:** Documentation markdown files might contain hardcoded GitHub URLs
**Status:** ✓ Searched and found - one GitHub issue link in `docs/training.md:298` included in Phase 1

## Rollback Plan

If issues occur:

1. **GitHub:** Rename repository back through GitHub settings
2. **Netlify:** Change site name back in Netlify settings
3. **Local:**
   ```bash
   git remote set-url origin https://github.com/mliebelt/schachtraining-lichess-discord.git
   git revert <commit-hash>
   git push origin main
   ```

## Pre-Execution Checklist

- [ ] Backup/snapshot of current deployment
- [ ] Verify no pending PRs that reference old name
- [ ] Confirm Netlify access and permissions
- [ ] Test local build works before starting
- [ ] Review all files that will be modified

## Timeline Estimate

- Phase 1: 10-15 minutes
- Phase 2: 5 minutes
- Phase 3: 5 minutes
- Phase 4: 10 minutes
- Phase 5: 5 minutes

**Total:** ~35-40 minutes

## Notes

- GitHub's automatic redirects from old repo name are permanent
- Netlify redirects from old site name may have limitations
- Consider keeping old Netlify site name as redirect for 6-12 months if traffic concerns exist
- No downtime expected during this process

# The Girl Social

Marketing site for The Girl Social — newsletter signup, membership tiers,
and a partner inquiry form. Built with Next.js + Tailwind, deployed on
Vercel. Newsletter and partner submissions forward to HubSpot's CRM.

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in your HubSpot values (see below)
npm run dev
```

Visit http://localhost:3000

## Connecting HubSpot

Forms won't actually submit anywhere until this is set up:

1. Create a free HubSpot account.
2. Find your **Portal ID** under Account Settings > Account Setup > Account Defaults.
3. Create two forms under Marketing > Lead Capture > Forms:
   - **Newsletter signup** — one field: Email
   - **Partner inquiry** — fields: First name, Email, Company, Message
4. Each form's edit URL is `app.hubspot.com/forms/<PORTAL_ID>/<FORM_GUID>/edit` — copy the GUID.
5. Put the three values into `.env.local` (locally) and into Vercel's
   Project Settings > Environment Variables (for production).

## Deploying

Push to `main` and Vercel deploys automatically (see collaboration workflow
below for how the repo is connected to Vercel).

## Working with a collaborator

We use one shared GitHub repo. Nobody commits straight to `main` —
everything goes through a branch and a pull request, and Vercel deploys a
preview URL for every PR automatically so you can see changes live before
merging.

**Day-to-day workflow:**

```bash
git checkout main
git pull
git checkout -b your-name/short-description   # e.g. emily/update-pricing
# ... make changes ...
git add .
git commit -m "Update membership pricing"
git push -u origin your-name/short-description
```

Then open a pull request on GitHub. Vercel comments on the PR with a preview
link. Once it looks good, merge — that auto-deploys to production.

**Using git worktrees** (optional, handy if you're switching between two
things at once, e.g. a hotfix while a bigger feature is in progress):

A worktree lets you check out a second branch into its own folder, without
stashing or losing your place in the first one. This is a *personal*, local
convenience — it doesn't replace pushing/pulling through GitHub, and your
colleague has their own separate clone with their own worktrees on their own
machine.

```bash
# from inside oslo-girl-social, on any branch
git worktree add ../oslo-girl-social-pricing emily/update-pricing
cd ../oslo-girl-social-pricing
npm install       # each worktree needs its own node_modules
npm run dev -- -p 3001   # run on a different port if the other worktree's dev server is still running
```

When you're done with that branch:

```bash
git worktree remove ../oslo-girl-social-pricing
```

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS
- Hosted on [Vercel](https://vercel.com)
- Form backend: HubSpot Forms API (`src/lib/hubspot.ts`)

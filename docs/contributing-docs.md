# Contributing Documentation

This page explains how to add or edit docs for the Greater Boston Mesh site, how to open a PR to the main repo, and the style rules we follow.

---

## Where Docs Live

- All docs are in `docs/`.
- Subfolders become sections in the sidebar (e.g., `MeshCore`, `Meshtastic`, `Node-Builds`).
- File names become URLs, so use short, clear, kebab-case names.

Example: `docs/MeshCore/meshcore-mqtt.md` shows up as `/docs/MeshCore/meshcore-mqtt`.

Order tips:

- Use `sidebar_position` in front matter to control order within a section.
- New files in `docs/MeshCore/` and `docs/Meshtastic/` will show up automatically in those sidebar sections.

---

## PR Workflow (Boston Mesh Repo)

We use the main Boston Mesh repo for all changes: `https://github.com/bostonmesh/bostonmesh`.

Create your own fork, make changes there, and open a pull request from your fork back to `bostonmesh/bostonmesh`.

Keep PRs focused on a single doc change or topic, and include a clear summary of what you updated.

---

## Style and Formatting

- Use one `#` title at the top of each doc. Keep it short and specific.
- Use `##` for sections and `###` for sub-sections.
- Prefer short paragraphs and bullets for scanability.
- Use **bold** for emphasis, not headings.
- Use backticks for commands, filenames, and code terms.
- Use `sidebar_position` in front matter if order matters.
- Keep link text meaningful (avoid "click here").

Title guidance:

- Good: `# Meshcore MQTT Setup`
- Not great: `# Setup` or `# Stuff`

---

## Markdown Basics

Headings:

```md
# Page Title
## Section Title
### Subsection Title
```

Lists:

```md
- Bullet item
- Another item

1. Numbered item
2. Next item
```

Links and images:

```md
[Boston Mesh site](https://example.com)
![Descriptive alt text](./assets/your-image.png)
```

Code blocks:

````md
```bash
npm run start
```
````

---

## Images and Assets

- Put images in an `assets/` folder next to the doc when possible.
- Use relative paths like `./assets/your-image.png`.
- Add alt text so the image is accessible.

---

## Quick Review Checklist

- Title is clear and specific.
- Headings follow the `#`, `##`, `###` structure.
- Commands and filenames are in backticks.
- Links and images work.
- File name is kebab-case and matches the content.

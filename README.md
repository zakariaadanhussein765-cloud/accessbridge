# AccessBridge — Business Registration & Compliance

A responsive Kenya-focused educational prototype to help entrepreneurs explore business registration, permits, tax basics, official resources, and a practical getting-started checklist.

## Run locally

The site uses plain HTML, CSS and JavaScript; it has no build step or application dependencies. From this folder, start a static server with Python:

```bash
python3 -m http.server 3000 --bind 0.0.0.0
```

Then open `http://localhost:3000`. The Manus Preview runtime uses the project-managed development command.

## Files

- `index.html` — semantic page structure and learning content
- `style.css` — design system and desktop/tablet/mobile layout
- `script.js` — checklist persistence, requirements explorer, support form validation, navigation and search behavior
- `manus-routes.json` — route manifest for the website

## Prototype behavior and privacy

Checklist checkbox progress is saved in this browser's `localStorage` under `accessbridge-checklist-v1`. Use **Reset my progress** to remove it. No identity, legal or financial documents are collected or stored. Explorer selections exist only in the current page session. The support form validates a draft locally; it does not transmit or save a request. This prototype has no backend, account system or contact submission service.

## Regulatory information

AccessBridge is an independent educational prototype, not an official government service. It does not provide legal or tax advice, legal representation, government approval, or a definitive assessment of permits. It avoids stating fixed rates, deadlines, fees or requirements. Users should confirm current details with the relevant agency, county, KRA or qualified professional. Linked primary resources include BRS, eCitizen, KRA, Kenya Law, the Kenya Trade Portal, InvestKenya's eProcedures portal and the Kenya National Chamber of Commerce and Industry.

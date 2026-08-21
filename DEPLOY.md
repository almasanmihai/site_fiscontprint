# Deploy fiscontprint.ro (LiteSpeed / FTP)

## Build local

```bash
npm install
npm run build
```

Conținutul de upload este în folderul `dist/`.

## Upload pe hosting

1. Conectează-te la cPanel / FTP al domeniului `fiscontprint.ro`.
2. **Fă backup** la conținutul actual din document root (`public_html` sau folderul domeniului).
3. Șterge (sau mută în backup) fișierele vechi ale site-ului de print/scan.
4. Încarcă **tot conținutul** din `dist/` în document root (inclusiv `.htaccess` dacă apare, `index.html`, `_astro/`, etc.).
5. Verifică:
   - https://fiscontprint.ro/
   - /servicii, /despre, /contact
   - linkul către https://fiscontsrl.ro/

## Formular contact (Formspree)

1. Creează un cont pe [formspree.io](https://formspree.io).
2. Creează un formular nou și copiază ID-ul (ex. `xyzabcde`).
3. În `src/components/ContactForm.astro`, înlocuiește `YOUR_FORM_ID` cu ID-ul real.
4. Rulează din nou `npm run build` și reîncarcă pe server.

Până configurezi Formspree, vizitatorii pot folosi `office@fiscontprint.ro` (link în formular).

## Preview local

```bash
npm run preview
```

## Mutare ulterioară pe Vercel (opțional)

Același proiect static merge pe Vercel: conectezi repo-ul, build command `npm run build`, output `dist`. Apoi pointezi DNS-ul domeniului.

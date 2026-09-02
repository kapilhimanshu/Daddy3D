# Daddy3D Global — GitHub Pages Ready

Upload all files to your GitHub repository root, then go to Settings → Pages → Build and deployment → Source: GitHub Actions. Push to the `main` branch and the included workflow will deploy automatically.

The site is fully static (HTML/CSS/JS), responsive, and includes light/dark themes. Replace `hello@daddy3d.global` if needed and add final approved case-study imagery/URLs before public launch.


## Final production contact details
- Domain: https://www.daddy3dglobal.com/
- Mobile: +91 98215 23706
- Customer videos: https://www.youtube.com/@nextgenspl

## Custom domain on GitHub Pages
After deployment:
1. Open GitHub repository **Settings → Pages**.
2. Enter `www.daddy3dglobal.com` under **Custom domain**.
3. Configure the required DNS records with your domain provider.
4. Enable **Enforce HTTPS** after GitHub verifies the domain.

A `CNAME` file is included in this package for the `www.daddy3dglobal.com` domain.


## Company information placement
The supplied website, email, mobile and YouTube details are presented as company information in the dedicated Company Details section and footer, rather than as primary navigation or promotional content.


## Customer enquiry form
The website now includes a customer enquiry form.
- Name: mandatory
- Phone number: mandatory
- Email, company, service interest and project brief: optional
- The submit button remains disabled until both mandatory fields are valid.
- The public page does not display the recipient email address.
- On submit, the static GitHub Pages site opens the visitor's email application with the enquiry pre-filled for the configured Daddy3D recipient.

### Important
GitHub Pages is static hosting and cannot securely send email by itself. The current implementation uses a `mailto:` handoff. For silent/background form delivery without opening the visitor's email app, connect the form to a backend or form service (for example Formspree, Web3Forms, Netlify Forms on compatible hosting, or your own API endpoint).

## Final UI/UX polish
- Mascot raised slightly in the hero for better visual balance.
- Subtle floating mascot animation added using CSS only.
- Glow gently pulses with the mascot to make the visual feel integrated with the page.
- Reduced-motion preference is respected for accessibility.
- Keyboard focus states and mobile tap behavior have been polished.

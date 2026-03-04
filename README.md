# UnicodeGen — Unicode Text Converter

A fast, client-side web app that converts plain text into a wide range of Unicode styled variants — perfect for social media bios, posts, and anywhere you want eye-catching typography.

🔗 **Live demo:** [lmichaelwar.github.io/UnicodeGen](https://lmichaelwar.github.io/UnicodeGen/)

---

## Features

- **20+ text styles** including Bold, Italic, Bold Italic, Script, Fraktur, Double Struck, Monospace, Circled, Squared, Fullwidth, Small Caps, Inverted, Regional Indicator, and more.
- **Zalgo / Glitch text** with an adjustable chaos slider.
- **One-click copy** — click the copy icon on any style card to copy the converted text to your clipboard.
- **Dark mode** — automatically follows your system preference.
- **Instant preview** — results update as you type with no server round-trips.

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Lucide React](https://lucide.dev/) | Icons |
| [Motion](https://motion.dev/) | Animations |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/lmichaelwar/UnicodeGen.git
cd UnicodeGen
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run preview   # preview the built output locally
```

## Deployment

This project is automatically deployed to **GitHub Pages** via a GitHub Actions workflow on every push to `main`. The workflow:

1. Installs dependencies with `npm ci`.
2. Runs `npm run build` (Vite outputs to `dist/`).
3. Publishes the `dist/` folder to the `gh-pages` environment.

No manual deployment steps are required.

## Project Structure

```
UnicodeGen/
├── src/
│   ├── components/
│   │   └── OutputCard.tsx   # Individual style result card
│   ├── utils/
│   │   └── unicodeStyles.ts # Unicode character maps & conversion logic
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
└── package.json
```

## License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)

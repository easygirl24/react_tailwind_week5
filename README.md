# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Lighthouse Audit

### Performance Optimization

I implemented lazy loading for the Home, Thank You, Item Details, and Not Found page components using React's `lazy()` and `Suspense`. This allows these page components to be loaded when needed.

### Before and After Results

| Page | Performance Before | Performance After |
|---|---:|---:|
| Home | 26 | 80 |
| Registration Form | 36 | Pending re-audit |

**Improvement:** The Home page Performance score increased by 54 points, from 26 to 80.

### Accessibility

| Page | Accessibility Score |
|---|---:|
| Home | 100 |
| Registration Form | Pending confirmation |

### Evidence

Screenshots of the Lighthouse reports before and after optimization should be included with this project.
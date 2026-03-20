# File structure

Overview of the `app`, `components`, and `lib` directories.

---

## App

```
app/
├── globals.css
├── layout.tsx
├── page.tsx
├── not-found.tsx
├── auth/
│   ├── login-link/
│   │   └── route.ts
│   ├── verify/
│   │   └── page.tsx
│   └── bootstrap-user/
│       └── route.ts
└── map/
    └── page.tsx
```

---

## Components

```
components/
├── DatePicker.tsx
├── FocusOverlay.tsx
├── GeneralMap.tsx
├── GuestSelector.tsx
├── Icons.tsx
├── SearchBar.tsx
├── auth/
│   ├── AuthFormFields.tsx
│   ├── CS-AuthForm.tsx
│   ├── SS-AuthForm.tsx
│   └── VerifyEmailForm.tsx
└── ui/
    ├── button.tsx
    ├── calendar.tsx
    ├── card.tsx
    ├── input.tsx
    ├── input-group.tsx
    ├── kbd.tsx
    ├── label.tsx
    ├── map.tsx
    ├── separator.tsx
    └── textarea.tsx
```

---

## Lib

```
lib/
├── algolia.ts
├── background.ts
├── backgrounds.json
├── rateLimit.ts
├── utils.ts
├── firebase/
│   ├── firebase.ts
│   ├── firebaseAdmin.ts
│   └── firebase.client.ts
└── mailing/
    ├── magic-link.ts
    └── postmark.ts
```

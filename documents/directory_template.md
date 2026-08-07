my-project/
├── CLAUDE.md
├── README.md
├── package.json
├── tsconfig.json
├── .env.example
├── .claude/
│   └── settings.json
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   └── loading.tsx
│   │   └── api/
│   │       └── users/
│   │           └── route.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   └── features/
│   │       ├── UserProfile.tsx
│   │       └── AnalyticsChart.tsx
│   ├── lib/
│   │   ├── db/
│   │   │   ├── client.ts
│   │   │   ├── schema.ts
│   │   │   └── migrations/
│   │   ├── repos/
│   │   │   ├── userRepo.ts
│   │   │   └── analyticsRepo.ts
│   │   ├── services/
│   │   │   ├── authService.ts
│   │   │   └── emailService.ts
│   │   └── utils/
│   │       ├── formatting.ts
│   │       └── validation.ts
│   ├── types/
│   │   ├── user.ts
│   │   ├── analytics.ts
│   │   └── api.ts
│   └── hooks/
│       ├── useAuth.ts
│       └── useDebounce.ts
├── tests/
│   ├── e2e/
│   └── fixtures/
└── scripts/
    ├── seed.ts
    └── migrate.ts

# Prisma

npm install prisma --save-dev

## Invoke prisma CLI

npx prisma

npx prisma init

- creates a new directory called prisma that contains a file called schema.prisma, which contains the

- Prisma schema with your database connection variable and schema models
  creates the .env file in the root directory of the project, which is used for defining environment variables (such as your database connection)

### Con sqlite

npx prisma init --datasource-provider sqlite

## Migrar (crea tablas definidas)

npx prisma migrate dev --name init

---

## A implementar

- Basic UI [x]
- Register [x]
- Login (nextAuth) [x]
- Create blogs [x]
- Remove Blogs (if owner) [x]
- Like blogs [x]
- Suspenses [x]
- Responsive [-]
- Pagination [-]
- Improve visually [-]
- Testing [-]

## Reset db

```
npx prisma migrate reset
```

## When cloning

```
DATABASE_URL="file:./dev.db"
```

- Run all migrations:
  - npx prisma migrate dev --name init

## Shadcn

```
pnpm dlx shadcn-ui@latest init

```

Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Do you want to use CSS variables for colors? › no / yes

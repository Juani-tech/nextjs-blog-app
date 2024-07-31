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
- Register [-]
- Login (nextAuth) [-]
- Create blogs [-]
- Remove Blogs (if owner) [-]
- Like blogs [-]
- Improve visually [-]
- Testing [-]

## Reset db

```
npx prisma migrate reset
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Desafio

[X] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[X] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
Apenas contas com o status true podem fazer empréstimo

[ ] Criar um novo tipo de conta a partir da DioAccount
Esta conta não deve receber novos atributos
Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)
[ ] Todos os atributos de qualquer conta devem ser privados

[ ] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[ ] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

First, run the development server:

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

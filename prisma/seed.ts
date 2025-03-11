import { db } from "./db";

async function main() {
    await db.post.deleteMany();
    await db.post.createMany({
        data: [
          {
            title: "Utforska Prisma ORM",
            content: "Prisma är ett kraftfullt verktyg för att hantera databaser i Node.js-projekt.",
            author: "Alice Andersson"
          },
          {
            title: "Guide till TypeScript",
            content: "Lär dig varför TypeScript kan förbättra din kodkvalitet och minska buggar.",
            author: "Bob Berg"
          },
          {
            title: "Vad är Next.js?",
            content: "Next.js är ett populärt React-ramverk för server-side rendering och statisk generering.",
            author: "Clara Carlsson"
          },
          {
            title: "Frontend vs Backend",
            content: "En genomgång av skillnaderna mellan frontend- och backend-utveckling.",
            author: "David Dahl"
          },
          {
            title: "Så fungerar REST API:er",
            content: "REST API:er används för att bygga skalbara och flexibla webbtjänster.",
            author: "Erika Ek"
          }
        ]
      });
    }      

main()
  .then(async () => {
    console.log("seeded database successfully!")
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
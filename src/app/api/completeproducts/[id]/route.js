const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getProductCompleteForProduct5() {
  const productId = 5;

  const productComplete = await prisma.product.findUnique({
    where: { id: productId },
    include: { ProductComplete: true },
  });

  console.log(productComplete.ProductComplete);
}

getProductCompleteForProduct5()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

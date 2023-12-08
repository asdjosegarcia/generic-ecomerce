-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "condition" TEXT NOT NULL DEFAULT 'New',
    "shipment" TEXT NOT NULL DEFAULT 'Free',
    "qualification" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "images" JSONB,
    "categories" JSONB,
    "seller" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "condition" TEXT NOT NULL DEFAULT 'New',
    "shipment" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "qualification" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "images" JSONB DEFAULT '{ "image1": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixsector.com%2Fcache%2F517d8be6%2Fav5c8336583e291842624.png&f=1&nofb=1&ipt=f0dd3636f84b1ff677873f0bacc0999feaa87f94ce139855b0cdc836bf7246f3&ipo=images"}',
    "categories" JSONB,
    "seller" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "views" INTEGER DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" SERIAL NOT NULL,
    "refreshToken" VARCHAR(255) NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "id" TEXT NOT NULL,
    "addedById" TEXT NOT NULL,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Tickets_addedById_idx" ON "Tickets"("addedById");

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

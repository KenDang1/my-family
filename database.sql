
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "familyMembers" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER,
	FOREIGN KEY ("user_id") REFERENCES "user"("id"),
	"firstName" VARCHAR(255),
	"lastName" VARCHAR(255),
	"birthday" DATE
);

CREATE TABLE "documents" (
	"id" SERIAL PRIMARY KEY,
	"familyMember_id" INTEGER,
	FOREIGN KEY ("familyMember_id") REFERENCES "familyMembers"("id"),
	"filePath" VARCHAR(10000)
);

CREATE TABLE "growth" (
	"id" SERIAL PRIMARY KEY,
	"height" FLOAT,
	"weight" FLOAT,
	"date" DATE,
	"familyMember_id" INTEGER,
	FOREIGN KEY ("familyMember_id") REFERENCES "familyMembers"("id")
);

CREATE TABLE "appointment" (
	"id" SERIAL PRIMARY KEY,
	"familyMember_id" INTEGER,
	FOREIGN KEY ("familyMember_id") REFERENCES "familyMembers"("id"),
	"name" VARCHAR(255),
	"location" VARCHAR(255),
	"date_time" DATE,
	"comments" VARCHAR(400)
);
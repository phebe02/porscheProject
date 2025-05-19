import { Porsche } from "./interfaces";
import * as fs from "fs";
import * as readline from "readline";

const porsches: Porsche[] = JSON.parse(
  fs.readFileSync("./data/porsches.json", "utf-8")
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showAllCars() {
  porsches.forEach((car) => {
    console.log(`- ${car.name} (${car.id})`);
  });
}

function showCarById(id: string) {
  const car = porsches.find((c) => c.id === id);
  if (!car) {
    console.log("❌ Geen Porsche gevonden met dat ID.");
    return;
  }

  console.log(`- ${car.name} (${car.id})`);
  console.log(`  - Description: ${car.description}`);
  console.log(`  - Price: €${car.price}`);
  console.log(`  - Active: ${car.isAvailable}`);
  console.log(`  - Release: ${car.releaseDate}`);
  console.log(`  - Category: ${car.category}`);
  console.log(`  - Features: ${car.features.join(", ")}`);
  console.log(`  - Image: ${car.imageUrl}`);
  console.log(`  - Factory: ${car.factory.name}`);
  console.log(`    - Location: ${car.factory.location}`);
  console.log(`    - Founded: ${car.factory.founded}`);
  console.log(`    - Electric Certified: ${car.factory.isElectricCertified}`);
}

function menu() {
  console.log("\nWelcome to the Porsche JSON Viewer!");
  console.log("1. View all Porsches");
  console.log("2. Filter by ID");
  console.log("3. Exit");

  rl.question("Your choice: ", (choice) => {
    if (choice === "1") {
      showAllCars();
      menu();
    } else if (choice === "2") {
      rl.question("Enter Porsche ID: ", (id) => {
        showCarById(id.trim());
        menu();
      });
    } else {
      rl.close();
    }
  });
}

menu();
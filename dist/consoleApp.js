"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const readline = __importStar(require("readline"));
const porsches = JSON.parse(fs.readFileSync("./data/porsches.json", "utf-8"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function showAllCars() {
    porsches.forEach((car) => {
        console.log(`- ${car.name} (${car.id})`);
    });
}
function showCarById(id) {
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
        }
        else if (choice === "2") {
            rl.question("Enter Porsche ID: ", (id) => {
                showCarById(id.trim());
                menu();
            });
        }
        else {
            rl.close();
        }
    });
}
menu();

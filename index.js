import dotenv from "dotenv";
import cowsay from "cowsay";

// Charger les variables d'environnement
dotenv.config();

// Utiliser les variables
const name = process.env.NAME;
const campus = process.env.CAMPUS;

// Afficher le message avec cowsay
console.log(
  cowsay.say({
    text: `Hello, I'm ${name} from ${campus} campus!`,
    e: "oO",
    T: "U ",
  })
);

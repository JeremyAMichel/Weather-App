/**
 * Service pour gérer les appels à l'API météo
 */

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

// Vérification de la présence de la clé API
if (!API_KEY) {
  console.error(
    "La clé API météo n'est pas définie. Veuillez configurer la variable d'environnement VITE_WEATHER_API_KEY"
  );
}

/**
 * Récupère les prévisions météo pour une ville donnée
 * @param {string} city - Nom de la ville
 * @param {number} days - Nombre de jours de prévision
 * @returns {Promise} Données météo
 */
export const fetchWeatherForecast = async (city = "Lyon", days = 5) => {
  try {
    if (!API_KEY) {
      throw new Error("Clé API non configurée");
    }

    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`
    );

    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo:", error);
    throw error;
  }
};

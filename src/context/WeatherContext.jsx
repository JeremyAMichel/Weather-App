import { createContext, useContext } from 'react';
import useWeather from '../hooks/useWeather';

// Création du contexte
const WeatherContext = createContext(null);

/**
 * Provider pour les données météo
 * @param {Object} props - Props du composant
 * @returns {JSX.Element} Provider du contexte
 */
export function WeatherProvider({ children, defaultCity = 'Lyon' }) {
  const weatherState = useWeather(defaultCity);
  
  return (
    <WeatherContext.Provider value={weatherState}>
      {children}
    </WeatherContext.Provider>
  );
}

/**
 * Hook pour utiliser le contexte météo
 * @returns {Object} Données et fonctions du contexte météo
 */
export function useWeatherContext() {
  const context = useContext(WeatherContext);
  
  if (!context) {
    throw new Error('useWeatherContext doit être utilisé au sein d\'un WeatherProvider');
  }

  console.log(context);
  
  
  return context;
}
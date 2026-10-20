/*
  Does a place look airport-related? Decides whether the optional Flight number applies (Request Flow Wireframe 7.1).
  Whole words, case- and diacritic-insensitive: IATA codes, "airport" and the same word in the local languages.
  The page uses it to show the field; normalisation uses it to drop a flight number from a non-airport journey.
*/
import { fold } from '../../utils/text';

const AIRPORT =
  /(?:^|[^\p{L}\p{N}])(?:vno|kun|plq|rix|tll|waw|wmi|airport|oro uost\p{L}*|lidosta\p{L}*|lennujaam\p{L}*|lotnisk\p{L}*)(?=$|[^\p{L}\p{N}])/u;

export const looksLikeAirport = (place: string) => AIRPORT.test(fold(place));

export const isAirportJourney = (from: string, to: string) => looksLikeAirport(from) || looksLikeAirport(to);

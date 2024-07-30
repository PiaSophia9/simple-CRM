export interface User {
  firstName: string;
  lastName: string;
  street: string;
  zip: number | string;
  city: string;
  birthdate: number; // Geändert von picker zu birthdate und vom Typ Date
}

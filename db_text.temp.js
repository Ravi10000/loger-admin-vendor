`
mongoexport --collection=apartments --db=loger --out=apartments.json && mongoexport --collection=bookings --db=loger --out=bookings.json
`;

const collections = [
  'apartments',
  'bookings',
  'calendars',
  'facilities',
  'hotelrooms',
  'hotels',
  'houserules',
  'legalentities',
  'promotions',
  'properties',
  'reviews',
  'transactions',
  'users',
  'verificationrequests',
  'wishlists'
];

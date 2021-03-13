export interface User {
  name: string;
  address: {
    geo: {
      lat: string;
      lng: string;
    };
  };
}
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  id: string;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: string;
  placeSpace: JsonValue;
  placeType: number;
  price: JsonValue;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};

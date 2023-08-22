import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: string;
  placeSpace: InputJsonValue;
  placeType: number;
  price: InputJsonValue;
  title: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};

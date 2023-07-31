export type BookingType = {
  created_at: unknown;
  startDate: unknown;
  endDate: unknown;
  cabinId: number;
  guestId: number;
  hasBreakfast: boolean;
  observations: string;
  isPaid: boolean;
  numGuests: number;
  numNights: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  guests: GuestType;
  cabins: { name: string };
};

export type GuestType = {
  fullName: string;
  email: string;
  nationality: string;
  nationalID: string;
  countryFlag: string;
};

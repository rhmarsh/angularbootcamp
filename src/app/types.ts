export interface Video {
  id: string;
  title: string;
  author: string;
  viewDetails: View[];
}

export interface Filter {
  region: string;
  minDate: string;
  maxDate: string;
  minors: boolean;
  adults: boolean;
  middleAges: boolean;
  seniors: boolean;
}

export interface View {
  "age": number;
  "region": string;
  "date": string;
}
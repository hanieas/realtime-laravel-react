export interface BookStates {
  books: Array<BookAtrr>;
  notification: boolean;
}

export interface BookAtrr {
  isbn: number;
  name: string;
  page: number;
  year: number;
  publisher: {
    fname: string;
    lname: string;
  };
  authors?: Array<any>;
}

export interface AuthorAtrr {
  fname: string;
  lname: string;
}

export interface BookProps {}

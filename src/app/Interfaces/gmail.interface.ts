  export interface gmail {
    status: number;
    message: string;
    data: Data;
  }

  export interface Child {
    name: string;
  }

  export interface Category {
    name: string;
    childs: Child[];
  }

  export interface Mail {
    subject: string;
    content: string;
    email: string;
    category: string;
    child: string;
  }

  export interface Data {
    categories: Category[];
    mails: Mail[];
  }

  export interface gmail {
    status: number;
    message: string;
    data: Data;
  }


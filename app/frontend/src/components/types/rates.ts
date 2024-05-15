interface RatesResponse {
  data: Rates;
}

interface Rates {
  rates: Array<Student>;
}

interface Student {
  firstname: string;
  lastname: string;
  rates: Array<Subject>;
}

interface Subject {
  name: string;
  value: number;
}

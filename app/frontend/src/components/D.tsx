import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

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

function D() {
  const [data, setData] = useState<Array<Student>>([]);
  const [index, setIndex] = useState(0);

  function increment() {
    if (index + 1 < data?.length) {
      setIndex(index + 1);
    }
  }
  function decrement() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  }
  function get_rates() {
    axios.get("http://127.0.0.1:8000/hello").then((res: RatesResponse) => {
      setData(res.data.rates);
    });
  }
  //   setData(res.data);

  useEffect(() => {
    get_rates();
  }, []);
  return (
    <>
      <Button onClick={increment} className="rounded-full bg-sky-400 items-centered mx-auto my-auto">
        Increment
      </Button>
      <Button onClick={decrement} className="rounded-full bg-sky-400 items-centered mx-auto my-auto">
        Decrement
      </Button>
      <div>
        {data.length && data?.[index].firstname},
        {data.length && data?.[index].lastname}
      </div>
    </>
  );
}

export default D;

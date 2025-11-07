interface UserType {
  firstName: string;
  lastName: string;
  age: number | null | '1' | '2';
}

const user: UserType = {
  firstName: 'John',
  lastName: 'Doe',
  age: '1',
};

user.age = 1;

function test(myUser: UserType) {
  console.log(myUser.age);
  return {
    test: 1,
  };
}

const result = test({
  age: 3,
  firstName: 'Jane',
  lastName: 'Doe',
});
console.log(result.test);

interface TestData {
  cb: (value: string) => void;
}

function test1(data: TestData) {
  data.cb('Hello, World!');
}

test1({
  cb: (message) => {
    console.log(message);
  },
});

interface PaginatedData<Data> {
  data: Data[];
  page: number;
  perPage: number;
  totalPages: number;
  totalCount: number;
}

const paginatedData: PaginatedData<UserType> = {
  page: 1,
  perPage: 1,
  totalCount: 1,
  totalPages: 1,
  data: [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: null,
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 12,
    },
  ],
};

const paginatedData1: PaginatedData<{
  firstName: string;
}> = {
  page: 1,
  perPage: 1,
  totalCount: 1,
  totalPages: 1,
  data: [
    {
      firstName: 'John',
    },
    {
      firstName: 'Jane',
    },
  ],
};

console.log(paginatedData);
console.log(paginatedData1);

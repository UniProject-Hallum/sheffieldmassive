import cities from "./gb.json";

function getSkills() {
  const optionList = [
    { value: "Electrical services", label: "Electrical services" },
    { value: "Plumbing", label: "Plumbing" },
    { value: "Kitchen renovation", label: "Kitchen renovation" },
    { value: "Window cleaner", label: "Window cleaner" },
    { value: "General fixes", label: "General fixes" },
    { value: "Painting", label: "Painting" },
  ];

  return optionList;
}

function getCities() {
  const listOfCities = cities;
  return listOfCities;
}

function getMockUserDB() {
  let userinfo = {
    description: "i am the best plumber",
    gender: "M",
    skills: ["plumber", "electricity", "window cleaner"],
    city: "birmingham",
  };

  let userinfo2 = {
    description: "i am the best Electrician",
    gender: "M",
    skills: ["electricity", "Car wrapping"],
    city: "birmingham",
  };

  let userinfo3 = {
    description: "i am the best Cleaner",
    gender: "M",
    skills: ["general Cleaning", "window cleaner"],
    city: "birmingham",
  };

  const users = [
    {
      email: "clive@gmail.com",
      username: "Clive Tsungu",
      password: "hello123",
      role: "handyman",
      userInfo: userinfo,
    },
    {
      email: "james@gmail.com",
      username: "James Smith",
      password: "smithy",
      role: "handyman",
      userInfo: userinfo2,
    },
    {
      email: "jack@gmail.com",
      username: "Jack",
      password: "jacky",
      role: "handyman",
      userInfo: userinfo3,
    },
  ];
  return users;
}

export { getSkills, getCities };

import cities from './gb.json'

function getSkills (){

    const optionList = [
        { value: "Electrical services", label: "Electrical services" },
        { value: "Plumbing", label: "Plumbing" },
        { value: "Kitchen renovation", label: "Kitchen renovation" },
        { value: "Window cleaner", label: "Window cleaner" },
        { value: "General fixes", label: "General fixes" },
        { value: "Painting", label: "Painting" }
      ];

      return optionList;

}

function getCities (){

    const listOfCities = cities; 
    return listOfCities;

}

function getMockUserDB(){

  let userinfo = {
    description: "i am the best plumber",
    gender: "M",
    skills: ["plumber","electricity","window cleaner"],
    city: "birmingham"
};

const user = [{email: "clive@gmail.com",
               username: "Clive Tsungu", 
               password: "hello123",
               role: "customer",
               userInfo: userinfo}]
return user               


}


export {getSkills,getCities}
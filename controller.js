app.controller("controller", function ($scope) {
  $scope.personal = {
    name: "Quan Le",
    title: "Game Developer",
    facebook: "https://www.facebook.com/quanleanh13/",
    email: "quanla.uet@gmail.com",
    phone: "+84 383436903",
  };
  $scope.career = getCareerData();
  $scope.skills = getSkillsData();
  $scope.portfolio = getPortfolioData();
});

function getPortfolioData() {
  var pRegisterRace = {
    icon: "images/port_registerace_01.png",
    background: "images/port_registerace_01.png",
    storeLink: "#",
    title: "Register Race",
    content: "test",
  };
  return [pRegisterRace];
}

function getCareerData() {
  var cVNG = {
    date: "07/18",
    content: "VNG",
  };

  var cRikkeisoft = {
    date: "04/19",
    content: "Rikkeisoft",
  };

  var cBazooka = {
    date: "08/20",
    content: "Bazooka Studio",
  };

  var cAdone = {
    date: "09/22",
    content: "Adone",
  };

  var cWingsmob = {
    date: "05/23",
    content: "Wingsmob"
  }

  return [cGraduate, cVNG, cRikkeisoft, cBazooka, cAdone, cWingsmob];
}

function getSkillsData() {
  return [
    "Major language: C#",
    "Major engine: Unity",
    "Major types of games: 2D / 3D casual/hypercasual, puzzle",
    "Strong about SE principles: OOP, SOLID, Design patterns",
    "Strong about C# elements: LinQ, Generics, Callbacks (delegates, action, func, predicate), etc",
    "Strong about Unity elements: 2D, 3D graphics, particle systems, physics, materials, shader, UGUI, NGUI, animations, etc",
    "Strong about game optimization: game fps, game build size, in-game memory caching.",
  ];
}

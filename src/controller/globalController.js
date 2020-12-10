const homeController = (req, res) => {
  res.render("screens/home");
};

const studentController = (req, res) => {
  res.render("screens/student");
};

export const globalController = {
  homeController,
  studentController,
};

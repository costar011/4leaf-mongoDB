const homeController = (req, res) => {
  res.render("screens/home");
};

const studentController = async (req, res) => {
  const result = await Student.find({}, {});
  // mongoose를 find로 database로 찾는다.
  console.log(result);
  res.render("screens/student");
};

export const globalController = {
  homeController,
  studentController,
};

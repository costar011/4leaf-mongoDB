import Student from "../../models/Student";

const homeController = (req, res) => {
  res.render("screens/home");
};

const studentController = async (req, res) => {
  const result = await Student.find({}, {});
  // find로 database로 찾는다.
  console.log(result);
  return res.render("screens/student", { student: result });
};

export const globalController = {
  homeController,
  studentController,
};

import Student from "../../models/Student";

const homeController = (req, res) => {
  res.render("screens/home");
};

const studentController = async (req, res) => {
  const result = await Student.find({}, {});

  return res.render("screens/student", { student: result });
};

export const globalController = {
  homeController,
  studentController,
};

const homeController = (req, res) => {
  res.render("screens/home");
};

export const globalController = {
  homeController,
};

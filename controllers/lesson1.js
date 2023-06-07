const jesusRoute = (req, res) => {
    res.send("Jesus Ramirez");
  }

const davidRoute = (req, res) => {
    res.send("David Nunez");
}

module.exports = {
    jesusRoute,
    davidRoute
}
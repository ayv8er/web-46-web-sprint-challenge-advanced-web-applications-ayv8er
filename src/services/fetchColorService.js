import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
  axiosWithAuth()
    .get("/colors")
    .then((res) => {
      setColors(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchColorService;

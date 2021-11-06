export const getHouses = (cb: any) => {
  fetch("/houses")
    .then((res) => res.json())
    .then((x) => cb(x));
};

export const getHouseByName = (name: string, cb: any) => {
  fetch("/houses/?name=" + name)
    .then((res) => res.json())
    .then((x) => cb(x));
};

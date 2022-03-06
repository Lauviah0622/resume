const langs = { tw: ".tw", en: ".en" };

export default function (allFiles) {
  const init = Object.keys(langs).reduce((obj, key) => {
    obj[key] = [];
    return obj;
  }, {});

  return allFiles.reduce((res, data) => {
    const [key, exp] = Object.entries(langs).find(([key, exp]) => {
      return data.file.pathname.match(exp);
    });

    res[key].push(data);
    return res;
  }, init);
}

async function fetchData(url, data) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    data.value = json.data;
    console.log(data.value[0]);
  } catch (err) {
    console.error(err);
  }
}
export default fetchData;

async function fetchData(url, data) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    data.value = json.data;
  } catch (err) {
    console.error(err);
  }
}
export default fetchData;

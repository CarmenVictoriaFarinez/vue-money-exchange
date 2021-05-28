const url = "https://api.coincap.io/v2";

function getAssets()
{
  return getRequest("assets?limit=25");
}

function getRequest(method)
{
  return fetch(`${url}/${method}`, {
    mode: "cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then((response) => {
    return response.data;
  })
  .catch(error => { console.log('request failed', error); }); 
}

function getAsset(coin)
{
  return getReques(`assets/${coin}`);
}

function getReques(method)
{
  return fetch(`${url}/${method}`, {
    mode: "cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then((response) => {
    return response.data;
  })
  .catch(error => { console.log('request failed', error); }); 
}

function getAssetHistory(coin){
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()
  return getReque(`assets/${coin}/history?interval=h1&start=${start}&end=${end}`);
}

function getReque(method)
{
  return fetch(`${url}/${method}`, {
    mode: "cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then((response) => {
    return response.data;
  })
  .catch(error => { console.log('request failed', error); }); 
}

export default { getAssets, getAsset, getAssetHistory };

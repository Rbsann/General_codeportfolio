const axios = require("axios")
const  getURL = async url =>
{
  let res = await axios.get(url)
  return res.data
}

const getUrlArray = () => 
{
  let args = process.argv.slice(2)
  .map(e => getURL(e))
  return Promise.all(args)
}

getUrlArray()
.then(data => data.forEach(e => console.log(e)))
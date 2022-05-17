import axios from 'axios'

const response = async() => {
  const url = 'http://localhost:5000/reserves'
  await axios.get( url )
  .then(res => {
    const data = res.data
    return data
  })
    .catch(err => {
      console.log(err);
    })
}

export default response


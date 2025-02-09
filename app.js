document.getElementById('refresh').addEventListener('click',function(){
    // Example of using fetch to get data from a URL
console.log(11)
fetch('https://dogapi.dog/api/v2/facts')  // Replace with your URL
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();  // Assuming the response is in JSON format
})
.then(data => {
    document.getElementById('fact').textContent=`"${data.data[0].attributes.body}"`;  // Handle the data here
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

})

fetch('https://dogapi.dog/api/v2/facts')  // Replace with your URL
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();  // Assuming the response is in JSON format
})
.then(data => {
    document.getElementById('fact').textContent=`"${data.data[0].attributes.body}"`;  // Handle the data here
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
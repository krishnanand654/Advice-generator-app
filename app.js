const getdata = () => {
    
    fetch("https://api.adviceslip.com/advice")
    .then( (response) => {
      return response.json();
    })
    .then( (responseData) => {

      document.querySelector('#id').innerHTML =  responseData.slip.id;
      document.querySelector('#ad').innerHTML =  responseData.slip.advice;
    }) 
    .catch(error => {
      console.log(error);
    })

    
  }
  
  getdata();
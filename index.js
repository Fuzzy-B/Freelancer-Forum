const freelancers = [
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  ];
  
  const table = document.getElementById("table");
   
  let currentIndex= 2

const addFreelancerInterval = setInterval 
(render, 2000)    

function render() { 
    const freelancer =freelancers[currentIndex]
        const element = document.createElement('tr');
        
        const name = document.createElement('td');
        name.textContent = freelancer.name;
        element.appendChild(name);

        const occupation = document.createElement('td');
        occupation.textContent = freelancer.occupation;
        element.appendChild(occupation);

        const price = document.createElement('td');
        price.textContent = freelancer.price;
        element.appendChild(price);

        table.appendChild(element);

        currentIndex += 1

        if (currentIndex >= freelancers.length) {
            clearInterval(addFreelancerInterval)
        }   

        totalPrices = 0
        for (let i = 0; i < currentIndex; i++) {
            totalPrices += freelancers[i].price;
        } 
        averagePrice = totalPrices/currentIndex
        displayAveragePrice(averagePrice);
    } 
     
    function displayAveragePrice(averagePrice) {
        const averagePriceDisplay = document.getElementById("averagePrice");
        averagePriceDisplay.textContent = Math.floor(averagePrice)
    }

 
function staticRender(freelancers) {
    for (i=0;i<2;i++) {
    let freelancer = freelancers[i]
    const element = document.createElement('tr');
        
        const name = document.createElement('td');
        name.textContent = freelancer.name;
        element.appendChild(name);

        const occupation = document.createElement('td');
        occupation.textContent = freelancer.occupation;
        element.appendChild(occupation);

        const price = document.createElement('td');
        price.textContent = freelancer.price;
        element.appendChild(price);

        table.appendChild(element);
    }
} 
staticRender(freelancers)

//average price 
 
 

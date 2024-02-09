const freelancersNotDisplayed = [
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  ]

  const freelancersDisplayed = []


const addFreelancerInterval = setInterval(addFreelancer, 2000);

function addFreelancer(){
    const nextFreelancer = freelancersNotDisplayed.shift()
    freelancersDisplayed.push(nextFreelancer)
 
    render()
}
function render() { 
    //document.queryselector to find the container to put rows in
    const freelancerContainer = document.querySelector('#freelancers')
 
    //.map to turn freelance objs in to row elements
    const freelancerElements = freelancersDisplayed.map(freelancer => {
        const rowElement = document.createElement('tr')

        const nameTd = document.createElement('td')
        nameTd.innerText = freelancer.name 

        const occupationTd = document.createElement('td')
        occupationTd.innerText = freelancer.occupation

        const priceTd = document.createElement('td')
        priceTd.innerText = freelancer.price

        rowElement.append(nameTd, occupationTd, priceTd)
        return rowElement
    })

    freelancerContainer.replaceChildren(...freelancerElements)
    //.replaceChildren(... ) to update the HTML

    const averageElement = document.querySelector('#avg-msg')
    const averagePrice = calculateAveragePrice(freelancersDisplayed)
    const averagePriceRounded = averagePrice.toFixed(2)
    const message = `The average starting price is $${averagePrice}`
    averageElement.innertext = message
}

function calculateAveragePrice(freelancers) {
    let sum = 0
    let count = freelancers.length
    for (const freelancer of freelancers) {
        const price = freelancer.price
        sum = sum +price
    }
    const averagePrice = sum/count
    return averagePrice 
}
// Business array containing all information for the companies
const businesses = [
	{
		purchasingAgent: { nameLast: 'Kirlin', nameFirst: 'Kristy' },
		phoneWork: '089.129.2290 x9400',
		orders: [ 7826.96, 8323.11, 5756.28, 6308.42, 5622.28 ],
		companyName: 'Care-media',
		companyIndustry: 'Education',
		addressZipCode: '56839',
		addressStateCode: 'WI',
		addressFullStreet: '8417 Franklin Court Tunnel',
		addressCity: 'Mouthcard'
	},
	{
		purchasingAgent: { nameLast: 'Steuber', nameFirst: 'Kamron' },
		phoneWork: '(833) 222-7579 x5874',
		orders: [ 6252.5, 9769.02, 9521.17, 7994.05, 7945.93 ],
		companyName: 'Stanholding',
		companyIndustry: 'Hospitality',
		addressZipCode: '09705',
		addressStateCode: 'NY',
		addressFullStreet: '2889 Fawn Court Garden',
		addressCity: 'Fellsmere'
	},
	{
		purchasingAgent: { nameLast: 'Gutkowski', nameFirst: 'Kaylee' },
		phoneWork: '235.266.6278',
		orders: [ 7634.43, 9766.72, 9953.45, 6559.8, 5054.9 ],
		companyName: 'Highnix',
		companyIndustry: 'Agriculture',
		addressZipCode: '49376',
		addressStateCode: 'ME',
		addressFullStreet: '5734 Maple Avenue Throughway',
		addressCity: 'Little Genesee'
	},
	{
		purchasingAgent: { nameLast: 'Crona', nameFirst: 'Lauren' },
		phoneWork: '1-449-987-3083 x23263',
		orders: [ 7384.52, 9252.72, 7272.65, 5251.84, 9680.08 ],
		companyName: 'Conit',
		companyIndustry: 'Defense',
		addressZipCode: '53326',
		addressStateCode: 'IL',
		addressFullStreet: '5755 Hillside Drive Crossroad',
		addressCity: 'Norval'
	},
	{
		purchasingAgent: { nameLast: 'Krajcik', nameFirst: 'Elvera' },
		phoneWork: '1-730-411-8580',
		orders: [ 6069.05, 8535.38, 5782.7, 7838.91, 7578.36 ],
		companyName: 'Dong-tom',
		companyIndustry: 'Energy',
		addressZipCode: '67071',
		addressStateCode: 'KS',
		addressFullStreet: '4826 Arch Street Lights',
		addressCity: 'Newburyport'
	},
	{
		purchasingAgent: { nameLast: 'Kling', nameFirst: 'Ellie' },
		phoneWork: '(868) 043-0950',
		orders: [ 6726.2, 8393.21, 8087.13, 6393.13, 8646.35 ],
		companyName: 'Dan-dox',
		companyIndustry: 'Manufacturing',
		addressZipCode: '98842',
		addressStateCode: 'WV',
		addressFullStreet: '9767 Cedar Court Corner',
		addressCity: 'Prince George'
	},
	{
		purchasingAgent: { nameLast: 'Robel', nameFirst: 'Otilia' },
		phoneWork: '(298) 305-1942 x53653',
		orders: [ 8676.05, 7430.69, 9379.81, 8074.29, 5998.75 ],
		companyName: 'J-base',
		companyIndustry: 'Health care',
		addressZipCode: '72993',
		addressStateCode: 'FL',
		addressFullStreet: '9954 Buckingham Drive Mountains',
		addressCity: 'Vesper'
	},
	{
		purchasingAgent: { nameLast: 'Gusikowski', nameFirst: 'Karolann' },
		phoneWork: '(743) 934-8981 x692',
		orders: [ 8650.08, 8042.69, 5555.72, 7467.86, 8851.43 ],
		companyName: 'Span-fix',
		companyIndustry: 'Construction',
		addressZipCode: '59860',
		addressStateCode: 'MT',
		addressFullStreet: '4151 Orange Street Extension',
		addressCity: 'Little Rock Air Force Base'
	},
	{
		purchasingAgent: { nameLast: 'Hartmann', nameFirst: 'Zena' },
		phoneWork: '727.635.6610 x6483',
		orders: [ 9415.89, 8935.45, 7413.91, 6830.96, 9746.57 ],
		companyName: 'Sanaplane',
		companyIndustry: 'Information',
		addressZipCode: '85156',
		addressStateCode: 'NY',
		addressFullStreet: '4765 Fairview Avenue Locks',
		addressCity: 'Dennisville'
	},
	{
		purchasingAgent: { nameLast: 'Torphy', nameFirst: 'Celia' },
		phoneWork: '(992) 079-1670 x71569',
		orders: [ 7431.21, 5911.85, 7954.86, 7141.52, 8416.79 ],
		companyName: 'Ran-taxon',
		companyIndustry: 'Manufacturing',
		addressZipCode: '96673',
		addressStateCode: 'MD',
		addressFullStreet: '7157 Hudson Street Ford',
		addressCity: 'Watrous'
	}
];
// Creating a container for the DOM output
const outputContainer = document.querySelector(`#output`);
// Foreach method
outputContainer.innerHTML = `<h1>Active Businesses</h1>`;
// For each loop for printing business information from the array to the DOM
// businesses.forEach((singleBusiness) => {
// 	outputContainer.innerHTML += `<h2>${singleBusiness.companyName}</h2>
// 	<p>${singleBusiness.addressFullStreet}</p>
// 	<p>${singleBusiness.addressCity}, ${singleBusiness.addressStateCode} ${singleBusiness.addressZipCode}</p>`; //Made city, state, zip one line
// });

// Filter method
// Filter for businesses in New York
const newYorkBusinessArray = businesses.filter((singleBusiness) => singleBusiness.addressStateCode === 'NY');
// console.log(newYorkBusinessArray)
// Lightning Exercise 2 : Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry. Display those to the DOM.
const manufacturingBusinesses = businesses.filter((singleBusiness) => singleBusiness.companyIndustry === `Manufacturing`);
// console.log(manufacturingBusinesses);

// Map Method
// Only want array with purchasing agents
// Lightning Exercise 3 : Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number
const purchasingAgentsArray = businesses.map(singleBusiness => {
	return{
		purchasingAgent: singleBusiness.companyName,
		agentName: singleBusiness.purchasingAgent,
		phoneWork: singleBusiness.phoneWork
	}
})
// console.log(purchasingAgentsArray)
purchasingAgentsArray.forEach(element => {
	outputContainer.innerHTML += `<h1>${element.purchasingAgent}</h1>
	<p>Purchasing Agent: ${element.agentName.nameFirst} ${element.agentName.nameLast}</p>
	<p>Phone Number: ${element.phoneWork}</p<
	`
});
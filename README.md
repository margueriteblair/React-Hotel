<h1>Welcome to the React Hotel! ¡Bienvenidos al React Hotel!</h1>

LOG:<br>
2020-10-06<br>
7:06 - Created form component<br>
7:52 - Editing the form component<br>
8:18 - Initialized the rent and return components<br>
8:46 - Created an AppRouter component to allow seamless flow between Rent and Return Components.<br>
9:15 - Fleshed out Return and Rent pages.<br>


Room prices equation: Price = ( $50 x floorNum ) + ( $10 x roomNum(ones place) - $10) + fixedDeposit($45)<br>
Examples:<br>
Room 202 = ( 50*2 ) + ( 10*2 - 10 ) + 45 = $155
Room 301 = ( 50*3 ) + ( 10*1 - 10 ) + 45 = $200

Intermediate Final Project: React Hotel

<h3>Overview:</h3><br>
This React Front-end will show an accurate display of available rooms at the CareerDevs Hotel. There will be a total of sixteen available rooms at the CD Hotel. Four for each of the four floors. Your goal is to create an interface for renting and returning a room at the CD Hotel. The application should be set up to display different components. One will be a viewing component to rent, and another to return. The app needs to include a navigation bar with two buttons to display to the user to the aforementioned components. 

<h3>Data:</h3>
The hotel room data needs to be stored in state and localStorage. This is so the whole app can have read/set access to the data, make sure you create a roomsContext hook and provide that context to the whole application. Use that context in functional components when the data needs to be read or set. The room's information needs to be stored in both a context and localStorage as a two dimensional array, where each nested element is an object. 
Ex. [ [ {room: ‘101’, renter: ‘bill’, price: 50 }}, { room: ‘102’, renting: null, price: 60 }, ... ], [ {room: ‘202’, …}, …], [...], [...] ]<br>
*triple dots represent room data that would be there
As you can see from above each sub array will represent a floor (four total), and each floor will have four rooms. Each room will be represented as an object with room (room number), renter (who is renting currently), and price (in dollars) properties. Note that a room not being rented should have a renter value of null. This will be used to represent a room not being rented.
When your application is first used the data should not be hard-coded, but should be produced programmatically. 



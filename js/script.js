// Fullname starts here
function getFullName(firstname, lastname) {
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
    .then(res => res.text())
    .then(data => {
        document.getElementById('fullName').innerHTML = data;
        document.getElementById('fullName-nav').innerHTML = data;
    })
}  
// Fullname ends here

// Total starts here 
function getTotalSales() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
    .then(res => res.json())              
    .then(data => {
        document.getElementById('totalSales').innerHTML = data.currency + data.amount;
    })
}

function getTotalPurchases() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-purchases')
    .then(res => res.json())              
    .then(data => {
        document.getElementById('totalPurchases').innerHTML = data.currency + data.amount;
    })
}

function getTotalOrders() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-orders')
    .then(res => res.json())              
    .then(data => {
        document.getElementById('totalOrders').innerHTML = data.currency + data.amount;
    })
}

function getTotalGrowth() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-growth')
    .then(res => res.json())              
    .then(data => {
        document.getElementById('totalGrowth').innerHTML = data.currency + data.amount;
    })
}
// Total ends here

// Users Starts here
function getTotalUsers() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-users')
    .then(res => res.json())              
    .then(data => {
        document.getElementById('totalUsers').innerHTML = data.users;
        document.getElementById('totalUsersGrowth').innerHTML = data.growth;
    })
}
// Users Ends here

// Projects Starts here
function getTotalProjects() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-projects')
    .then(res => res.json())              
    .then(data => {
        document.getElementById('totalProjects').innerHTML = data.projects;
        document.getElementById('totalProjects-p').innerHTML = data.growth;
    })
}
// Projects Ends here

// Messages Starts here // NOT WORK?
function getMessages() {
    const messages = document.getElementById('messages');

    fetch('https://inlupp-fa.azurewebsites.net/api/messages')
    .then(res => res.json())              
    .then(data => {

        for(message of data) {
            messages.insertAdjacentHTML('beforeend', `
    
        <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
                <img src="https://via.placeholder.com/36x36" alt="image" class="profile-pic">
            </div>
            <div class="preview-item-content flex-grow">
                <h6 class="preview-subject ellipsis font-weight-normal">${message.from}
                </h6>
                <p class="font-weight-light small-text text-muted mb-0">
                ${message.title}
                </p>
            </div>
        </a>
        `);
        }
    })
}
// Messages Ends here

// Notifications Starts here
function getNotifications() {
    const notifications = document.getElementById('notifications');

    fetch('https://inlupp-fa.azurewebsites.net/api/notifications')
    .then(res => res.json())              
    .then(data => {

    for(notification of data) {                       
        notifications.insertAdjacentHTML('beforeend', `

        <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
                <div class="preview-icon bg-success">
                    <i class="mdi mdi-information mx-0"></i> 
                </div>
            </div>
            <div class="preview-item-content">
                <h6 class="preview-subject font-weight-normal">${notification.title}</h6>
                <p class="font-weight-light small-text mb-0 text-muted">
                    ${notification.subtitle}
                </p>
            </div>
        </a>
    `);
    }
    })
}
// Notifications Ends here

// Total Sales Starts here
function getTotalSalesChart() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart')
    .then(res => res.json())              
    .then(data => {
        document.getElementById('revenue').innerHTML = data.revenue;
        document.getElementById('returns').innerHTML = data.returns;
        document.getElementById('queries').innerHTML = data.queries;
        document.getElementById('invoices').innerHTML = data.invoices;
        // Resten ligger i dashboard.js!
    })
}
// Total Sales Ends here

// Tickets Starts here
function getTickets() {
    let ticket = document.getElementById('tickets');

    fetch('https://inlupp-fa.azurewebsites.net/api/tickets')
    .then(res => res.json())              
    .then(data => {

        for (let i = 0; i < data[1].tickets.length; i++) {

            let Clock = data[1].tickets[i].date.split(", ");
            let initials = data[1].tickets[i].name.split(' ')[0][0] + data[1].tickets[i].name.split(' ')[1][0];
            let myDate = data[1].tickets[i].date.split(' ')[0][0] + data[1].tickets[i].date.split(' ')[0][1] + " " + data[1].tickets[i].date.split(' ')[1][0] + data[1].tickets[i].date.split(' ')[1][1] + data[1].tickets[i].date.split(' ')[1][2]+ " " + data[1].tickets[i].date.split(' ')[2][0] + data[1].tickets[i].date.split(' ')[2][1] + data[1].tickets[i].date.split(' ')[2][2]+ data[1].tickets[i].date.split(' ')[2][3];
            
            ticket.insertAdjacentHTML('beforeend', `
                <tr>
                <td class="pl-0">
                <div class="icon-rounded-primary icon-rounded-md">
                    <h4 class="font-weight-medium">${initials}</h4>
                </div>
                </td>
                <td>
                <p class="mb-0">${data[1].tickets[i].name}</p>
                <p class="text-muted mb-0">${data[1].tickets[i].city}</p>
                </td>
                <td>
                <p class="mb-0">${myDate}</p>
                <p class="text-muted mb-0">${Clock[1]}</p>
                </td>
                <td>
                <p class="mb-0">${data[1].tickets[i].project}</p>
                <p class="text-muted mb-0">${data[1].tickets[i].other}</p>
                </td>
                <td class="pr-0">
                <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                </td>
            </tr>
        `);
        }

        for (let i = 0; i < data.length; i++) {
    
            year.insertAdjacentHTML('beforeend', `
            <a class="dropdown-item" href="#">${data[i].year}</a>
        `);
        }
    
        yearsButton.insertAdjacentHTML('beforeend', `
        <button class="btn btn-sm btn-outline-light dropdown-toggle text-dark" type="button" id="dropdownMenuDate1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            ${data[1].year}
        </button>
        `);
    })
    
    let year = document.getElementById('years');
    let yearsButton = document.getElementById('yearsBtn');
}
// Tickets Ends here

// Updates Starts here
function getUpdates() {

    let update = document.getElementById('updates');

    fetch('https://inlupp-fa.azurewebsites.net/api/updates')
    .then(res => res.json())              
    .then(data => {

        for (let i = 0; i < data.length; i++) {
    
            update.insertAdjacentHTML('beforeend', `
            <li>
            <h6>${data[i].title}</h6>
            <p class="mt-2">${data[i].message}</p>
            <p class="text-muted mb-4">
                <i class="mdi mdi-clock-outline"></i>
                ${data[i].time}
            </p>
        </li>
        `);
        }

    })
}
// Updates Ends here

// Offline and Online Downloads Starts here
function getDownloads() {
    fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
    .then(res => res.json())              
    .then(data => {
        document.getElementById('offline').innerHTML = data[0].offlineAmount;
        document.getElementById('online').innerHTML = data[1].onlineAmount;

        let offlineCircle = data[0].circleValue;
        localStorage.setItem('offlineProgress', offlineCircle);

        let onlineCircle = data[1].circleValue;
        localStorage.setItem('onlineProgress', onlineCircle);
    })
}

let offlineNumber = parseFloat(localStorage.getItem('offlineProgress'));
let onlineNumber = parseFloat(localStorage.getItem('onlineProgress'));
// Offline and Online Downloads Ends here

// Open Invoices Starts here
function getOpenInvoices() {
    let invoice = document.getElementById('sale-invoices');

    fetch('https://inlupp-fa.azurewebsites.net/api/open-invoices')
    .then(res => res.json())              
    .then(data => {

        for (let i = 0; i < data.length; i++) {
            invoice.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${data[i].invoice}</td>
                <td>${data[i].customer}</td>
                <td>${data[i].shipping}</td>
                <td class="font-weight-bold">$${data[i].bestPrice}</td>
                <td>${data[i].currency}${data[i].purchasedPrice}</td>
                <td><div class="badge badge-success badge-fw">${data[i].status}</div></td>
            </tr>
        `);
        }
    })
}
// Open Invoices Ends here

// Run these functions below:
    getFullName('Fredrik', 'Gehrke');
    getTotalSales();
    getTotalPurchases();
    getTotalOrders();
    getTotalGrowth();
    getTotalUsers();
    getTotalProjects();
    getNotifications();
    getTotalSalesChart();
    getMessages();
    getTickets();
    getUpdates();
    getDownloads();
    getOpenInvoices();


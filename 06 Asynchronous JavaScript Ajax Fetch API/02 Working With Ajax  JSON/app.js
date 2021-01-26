document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</id>
          <li>Name: ${customer.name}</id>
          <li>Company: ${customer.company}</id>
          <li>Phone: ${customer.phone}</id>
        </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

// Load Customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer){
        output += `
          <ul>
            <li>ID: ${customer.id}</id>
            <li>Name: ${customer.name}</id>
            <li>Company: ${customer.company}</id>
            <li>Phone: ${customer.phone}</id>
          </ul>
        `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}
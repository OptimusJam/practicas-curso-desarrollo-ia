# Logistic center management API specification
## Problem description
- As a warehouse manager, I want to **add new packages to the system** so that **inventory can be tracked accurately**.
- As a dispatcher, I want to **assign packages to shipments** so that **deliveries can be organized efficiently**.
- As a customer, I want to **track the status of my package** so that **I can know the delivery progress**.
## Solution overview
- Implement a simple REST API that allows CRUD operations for packages, shipments, and provides tracking information through endpoints.
## Acceptance criteria
- [ ] When a warehouse manager adds a new package, the system should store the package details in the database and return a confirmation.
- [ ] When a dispatcher assigns a package to a shipment, the system should update the package status and link it to the shipment.
- [ ] When a customer queries the package status, the system should return the current status and location if available.
- [ ] In the event of a shipment delay, the system should notify affected customers via email.
- [ ] When a package is delivered, the system should update the status to delivered and record the delivery time.
- [ ] If a package is not found, the system should return a 404 error.
- [ ] The API should support pagination for listing packages and shipments.
- [ ] Authentication should be required for warehouse managers and dispatchers to perform actions.
- [ ] The system should log all changes to packages and shipments for auditing purposes.
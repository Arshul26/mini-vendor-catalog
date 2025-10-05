### Frontend

- Display all products in a **grid/list view** with name, description, and price  
- Add new products using a **form**  
- **Delete products** using a delete button  
- **Automatic updates** on add/delete without page refresh  
- Responsive and clean UI

### Backend

- **REST API Endpoints**:

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | /api/products             | Fetch all products              |
| POST   | /api/products             | Add a new product               |
| DELETE | /api/products/:id         | Delete a product by ID          |

- Handles JSON requests/responses  
- CORS enabled for frontend-backend communication  
- Error handling for invalid requests or server errors  
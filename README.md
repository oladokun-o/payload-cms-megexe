## Megaexe Screening Test Web Application Backend

This repository contains the backend code for the Megaexe Screening Test Web Application. It was developed using **Payload CMS**, a headless CMS for managing page content and serving APIs.

---

### Features
1. **Dynamic Content Management**  
   - Collections created in Payload CMS to manage pages, ensuring easy content updates.

2. **API Endpoints**  
   - Exposed APIs for frontend consumption, including dynamic page content and metadata.

3. **Payload CMS Configuration**  
   - Configured environmental variables and collections to align with the frontend requirements.

4. **Deployment**  
   - Hosted on **Railway** with full backend functionality.

---

### Challenges
1. **Payload CMS Configuration**  
   - **Problem** Understanding the Payload CMS structure and configuration to align with the frontend requirements.
    - **Solution** Read the documentation and experimented with different configurations to achieve the desired results.

2. **API Endpoint Connection**
    - **Problem** Connecting the frontend to the backend API endpoints.
    - **Solution** Implemented the API endpoints and tested them using Postman to ensure they return the expected data.

3. **Deployment**
    - **Problem** Dockerfile configuration and deployment on Railway.
    - **Solution** Observed the production logs and made necessary adjustments to the Dockerfile to ensure successful deployment.

---

### Setup Instructions
1. Clone the repository:  
   ```bash
   git clone https://github.com/oladokun-o/payload-cms-megexe.git
   cd payload-cms-megexe
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Configure environment variables:  
   Create a `.env` file with the following keys:  
   ```env
   MONGODB_URI=[Your MongoDB URI]
   PAYLOAD_SECRET=[Your Secret Key]
   PAYLOAD_PUBLIC_SITE_URL=https://megaexe-dashboard.netlify.app/
   ```

4. Start the development server:  
   ```bash
   npm run dev
   ```

5. Build for production:  
   ```bash
   npm run build
   ```

6. Start production server:  
   ```bash
   npm start
   ```

### **Login Credentials**  

To test the application, use the following credentials:  

#### **Admin Account**  
- **Email**: `oladipupooladokun@gmail.com`  
- **Password**: `TGidm62k@tbwiAn`  

---

### Deployment
The backend is deployed on [Deployment Platform] and accessible at:  
[**Production Backend URL**](https://payload-cms-megexe-production.up.railway.app/)

---

### Tools and Technologies
- **Payload CMS**: For content management.
- **MongoDB**: For database storage.
- **Deployment Platform**: Railway.

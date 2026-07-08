> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# API SUMMARY

## 1. PURPOSE
This file catalogs all API endpoints and Next.js Server Actions configured in the AXEN application, describing inputs, outputs, auth wrappers, and dependencies.

## 2. WHEN AI SHOULD READ IT
- Read this file before creating new api routes, editing endpoints, or connecting components to backend routes.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file whenever an API endpoint is introduced, deprecated, or has its parameters modified.

---

## 4. API ENDPOINTS INVENTORY

### `POST /api/enquiries`
- **Purpose:** Submits an customer enquiry from the multi-step form to Supabase.
- **Authentication:** None (Public).
- **Request Headers:**
  - `Content-Type: application/json`
- **Request Body (JSON):**
  ```json
  {
    "name": "John Doe",
    "email": "john@company.com",
    "company": "Company Inc",
    "project_type": ["AI Integration", "Development"],
    "budget_range": "$10,000 - $25,000",
    "timeline": "1-3 months",
    "message": "Project description..."
  }
  ```
- **Response Format (JSON):**
  - **Success (201 Created):**
    ```json
    {
      "success": true,
      "message": "Enquiry submitted successfully",
      "data": { "id": "uuid" }
    }
    ```
  - **Failure (400 Bad Request / Validation Failure):**
    ```json
    {
      "success": false,
      "error": "Invalid email address"
    }
    ```
- **Dependencies:** Zod validator, Supabase server client.

---

## 5. FUTURE ADDITIONS
*(Section reserved for detailing admin API endpoints, database query endpoints, or webhooks)*

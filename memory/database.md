> This document exists to reduce unnecessary repository scanning.
> Always consult this file before exploring the codebase.
> Only inspect files directly related to the requested task.

# DATABASE SUMMARY

## 1. PURPOSE
This file documents the Supabase PostgreSQL database design. It outlines tables, field types, primary keys, relational maps, indexing, security policies, and storage configurations. (Contains no raw SQL queries).

## 2. WHEN AI SHOULD READ IT
- Read this file before executing database operations, modifying backend route handlers, or altering database models.

## 3. WHEN AI SHOULD UPDATE IT
- Update this file whenever a database schema change is decided, RLS rules are updated, or storage buckets are introduced.

---

## 4. SCHEMA INVENTORY

### Table: `enquiries`
- **Purpose:** Stores contact payloads submitted from the Multi-step Contact Form.
- **Fields:**
  - `id` (UUID, Primary Key, Auto-generate)
  - `created_at` (TimestampTZ, default `now()`)
  - `name` (Text, Required)
  - `email` (Text, Required)
  - `company` (Text, Optional)
  - `project_type` (Text[], Required)
  - `budget_range` (Text, Required)
  - `timeline` (Text, Required)
  - `message` (Text, Optional)
  - `status` (Text, default 'unread')

### Table: `projects`
- **Purpose:** Houses case study metadata rendered in `/work` and `/work/[slug]`.
- **Fields:**
  - `id` (UUID, Primary Key, Auto-generate)
  - `slug` (Text, Unique, Required)
  - `title` (Text, Required)
  - `client` (Text, Required)
  - `role` (Text, Required)
  - `description` (Text, Required)
  - `scope` (Text[], Required)
  - `tech_stack` (Text[], Required)
  - `thumbnail_url` (Text, Required)
  - `outcome_metric` (Text, Optional)
  - `outcome_desc` (Text, Optional)

---

## 5. RELATIONSHIPS
- **Current Map:** There are no complex relational joins needed for v1. Dynamic data retrieval relies on primary keys and indices.

---

## 6. ROW LEVEL SECURITY (RLS) POLICIES

### Table: `enquiries`
- **Public Insert:** Enabled. Allows non-authenticated site visitors to insert new enquiries.
- **Select / Update / Delete:** Restricted. Only authenticated admin roles (`auth.uid()` in admin table) can query or mutate records.

### Table: `projects`
- **Public Select:** Enabled. Allows anonymous users to read case studies.
- **Insert / Update / Delete:** Restricted. Write operations are restricted strictly to authenticated admin users.

---

## 7. INDEXES
- **`projects(slug)`:** Unique index for rapid dynamic page lookups.
- **`enquiries(created_at)`:** Standard index for sorting incoming dashboard items.

---

## 8. STORAGE BUCKETS
- **`project-media`:** Public access bucket hosting case study image thumbnails and looped video assets. Uploads restricted to admins.

---

## 9. REALTIME CONFIGURATIONS
- **`enquiries`:** Realtime enabled. Allows admin dashboards to instantly receive new submissions without polling.

---

## 10. FUTURE ADDITIONS
*(Section reserved for detailing admin auth schemas, analytics tables, or message log relations)*

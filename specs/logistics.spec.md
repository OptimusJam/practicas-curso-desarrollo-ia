# Logistics Center Management API Specification

## Problem Description

### User Story 1
As a **logistics operator**, I want to **create and manage logistics centers** so that **I can organize distribution infrastructure across different geographic locations**.

### User Story 2
As a **logistics operator**, I want to **create and track customer orders** so that **I can maintain a record of all shipments and their statuses**.

### User Story 3
As a **system administrator**, I want to **automatically assign pending orders to logistics centers** so that **orders are efficiently distributed based on capacity, proximity, and compatibility without manual intervention**.

## Solution Overview

The solution implements a distributed logistics management system with the following components:

- **Logistics Centers Management**: A REST API to create, read, update, and delete logistics centers with configurable attributes (name, supported order types, capacity, geographic coordinates).
- **Order Management**: An API to create and manage customer orders with size classification (B, M, S) and geographic coordinates.
- **Automatic Assignment Engine**: An intelligent system that processes pending orders and assigns them to the most suitable logistics center based on multiple criteria including type compatibility, available capacity, geographic proximity, and center availability.
- **Geolocation Services**: A calculation module to determine distances between orders and centers using coordinate-based metrics.

## Acceptance Criteria

- [ ] **When** a logistics operator submits a request to create a center **Then** the system must validate that no center exists at the same coordinates **And** the system must store the center with initial load as zero.

- [ ] **When** a logistics operator retrieves the list of logistics centers **Then** the system must return all active centers with their current attributes (name, capacity, current load, supported types, coordinates).

- [ ] **When** a logistics operator updates a center's capacity or load **Then** the system must validate that current load does not exceed the new capacity **And** reject the update if the constraint is violated.

- [ ] **When** a customer creates an order **Then** the system must initialize it with status PENDING, no assigned center **And** validate that the order size is one of (B, M, or S).

- [ ] **When** the assignment process runs on pending orders **Then** the system must evaluate all compatible centers **And** assign each order to the center with sufficient capacity that is geographically closest.

- [ ] **When** an order is assigned to a center **Then** the system must update the order status to ASSIGNED **And** increment the center's current load by the order size.

- [ ] **When** multiple centers have equal distance to an order **Then** the system must select the center with the most available capacity (highest remaining capacity).

- [ ] **When** a logistics operator deletes a center **Then** the system must remove the center **And** update any orders assigned to it back to PENDING status.

- [ ] **When** the assignment process evaluates an order **Then** the system must process orders in creation order (FIFO) **And** ensure each pending order is considered exactly once per assignment cycle.

import { test, expect } from "@playwright/test";

test.describe("Health Endpoint Smoke Tests", () => {
  test("should return 200 status on health endpoint", async ({ request }) => {
    const response = await request.get("/health");

    expect(response.status()).toBe(200);
  });

  test("should return JSON with status 'ok'", async ({ request }) => {
    const response = await request.get("/health");

    expect(response.ok()).toBeTruthy();

    const data = await response.json();

    expect(data).toHaveProperty("status");
    expect(data.status).toBe("ok");
  });

  test("should return a timestamp in ISO format", async ({ request }) => {
    const response = await request.get("/health");

    const data = await response.json();

    expect(data).toHaveProperty("timestamp");
    expect(typeof data.timestamp).toBe("string");

    // Validate ISO 8601 format
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
    expect(isoRegex.test(data.timestamp)).toBeTruthy();
  });

  test("should have correct Content-Type header", async ({ request }) => {
    const response = await request.get("/health");

    expect(response.headers()["content-type"]).toContain("application/json");
  });

  test("should respond within reasonable time", async ({ request }) => {
    const startTime = Date.now();

    await request.get("/health");

    const endTime = Date.now();
    const responseTime = endTime - startTime;

    // Response should be under 500ms
    expect(responseTime).toBeLessThan(500);
  });
});

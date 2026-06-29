import { describe, expect, it } from "vitest";
import {
  getCategoryBySlug,
  getFeaturedServices,
  getServiceBySlug,
  getServicesByCategory,
  serviceCategories,
  services,
} from "./site";

describe("content/site", () => {
  it("has unique service slugs", () => {
    const slugs = services.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("maps every service to a known category", () => {
    const categorySlugs = new Set(serviceCategories.map((c) => c.slug));
    for (const service of services) {
      expect(categorySlugs.has(service.category)).toBe(true);
    }
  });

  it("resolves a service by slug", () => {
    const first = services[0];
    expect(getServiceBySlug(first.slug)).toEqual(first);
    expect(getServiceBySlug("does-not-exist")).toBeUndefined();
  });

  it("resolves a category by slug", () => {
    expect(getCategoryBySlug("naraschivanie")?.slug).toBe("naraschivanie");
    expect(getCategoryBySlug("nope")).toBeUndefined();
  });

  it("filters services by category", () => {
    const items = getServicesByCategory("naraschivanie");
    expect(items.length).toBeGreaterThan(0);
    expect(items.every((s) => s.category === "naraschivanie")).toBe(true);
  });

  it("returns only featured services", () => {
    const featured = getFeaturedServices();
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.every((s) => s.featured)).toBe(true);
  });
});

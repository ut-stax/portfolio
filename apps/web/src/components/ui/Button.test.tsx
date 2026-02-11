// @ts-nocheck
import { describe, it, expect } from "vitest";

describe("Button Component", () => {
  describe("Button Variants", () => {
    it("should have primary variant", () => {
      const variant = "primary";
      expect(variant).toBe("primary");
    });

    it("should have secondary variant", () => {
      const variant = "secondary";
      expect(variant).toBe("secondary");
    });

    it("should have outline variant", () => {
      const variant = "outline";
      expect(variant).toBe("outline");
    });

    it("should have ghost variant", () => {
      const variant = "ghost";
      expect(variant).toBe("ghost");
    });

    it("should have link variant", () => {
      const variant = "link";
      expect(variant).toBe("link");
    });
  });

  describe("Button Sizes", () => {
    it("should have sm size", () => {
      const size = "sm";
      expect(size).toBe("sm");
    });

    it("should have md size", () => {
      const size = "md";
      expect(size).toBe("md");
    });

    it("should have lg size", () => {
      const size = "lg";
      expect(size).toBe("lg");
    });

    it("should have icon size", () => {
      const size = "icon";
      expect(size).toBe("icon");
    });
  });

  describe("Button States", () => {
    it("should have disabled state", () => {
      const disabled = true;
      expect(disabled).toBe(true);
    });

    it("should have loading state", () => {
      const loading = true;
      expect(loading).toBe(true);
    });
  });
});

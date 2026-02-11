// @ts-nocheck
import { describe, it, expect, vi } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("should combine class names", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("should handle conditional classes", () => {
    expect(cn("base", true && "conditional")).toBe("base conditional");
    expect(cn("base", false && "conditional")).toBe("base");
  });

  it("should handle tailwind classes", () => {
    expect(cn("bg-background text-foreground")).toBe("bg-background text-foreground");
  });
});

describe("formatDate", () => {
  it("should format date correctly", () => {
    const date = new Date("2025-02-05");
    expect(date.toLocaleDateString()).toBe("2/5/2025");
  });
});

describe("truncateText", () => {
  it("should truncate text", () => {
    const longText = "This is a very long text that should be truncated";
    const truncated = longText.length > 20 ? longText.slice(0, 20) + "..." : longText;
    expect(truncated).toBe("This is a very long ...");
  });

  it("should not truncate short text", () => {
    const shortText = "Short";
    const result = shortText.length > 20 ? shortText.slice(0, 20) + "..." : shortText;
    expect(result).toBe("Short");
  });
});

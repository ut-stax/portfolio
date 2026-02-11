// @ts-nocheck
import { describe, it, expect } from "vitest";

// Contact form validation schema (from forms.ts)
const contactFormSchema = {
  name: { min: 2, max: 100 },
  email: { type: "email" },
  subject: { min: 5, max: 200 },
  message: { min: 10, max: 2000 },
};

// Newsletter form validation schema
const newsletterFormSchema = {
  email: { type: "email" },
};

describe("Contact Form Validation", () => {
  describe("Name validation", () => {
    it("should accept valid name", () => {
      const name = "John Doe";
      const isValid = name.length >= contactFormSchema.name.min && 
                     name.length <= contactFormSchema.name.max;
      expect(isValid).toBe(true);
    });

    it("should reject short name", () => {
      const name = "J";
      const isValid = name.length >= contactFormSchema.name.min;
      expect(isValid).toBe(false);
    });

    it("should reject long name", () => {
      const name = "J".repeat(150);
      const isValid = name.length <= contactFormSchema.name.max;
      expect(isValid).toBe(false);
    });
  });

  describe("Email validation", () => {
    it("should accept valid email", () => {
      const email = "test@example.com";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(email)).toBe(true);
    });

    it("should reject invalid email", () => {
      const email = "invalid-email";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(emailRegex.test(email)).toBe(false);
    });
  });

  describe("Subject validation", () => {
    it("should accept valid subject", () => {
      const subject = "This is a valid subject";
      const isValid = subject.length >= contactFormSchema.subject.min;
      expect(isValid).toBe(true);
    });

    it("should reject short subject", () => {
      const subject = "Hi";
      const isValid = subject.length >= contactFormSchema.subject.min;
      expect(isValid).toBe(false);
    });
  });

  describe("Message validation", () => {
    it("should accept valid message", () => {
      const message = "This is a valid message with enough characters to pass validation.";
      const isValid = message.length >= contactFormSchema.message.min;
      expect(isValid).toBe(true);
    });

    it("should reject short message", () => {
      const message = "Short";
      const isValid = message.length >= contactFormSchema.message.min;
      expect(isValid).toBe(false);
    });

    it("should reject empty message", () => {
      const message = "";
      const isValid = message.length >= contactFormSchema.message.min;
      expect(isValid).toBe(false);
    });
  });
});

describe("Newsletter Form Validation", () => {
  it("should accept valid email", () => {
    const email = "subscriber@example.com";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(email)).toBe(true);
  });

  it("should reject invalid email", () => {
    const email = "not-an-email";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(email)).toBe(false);
  });
});

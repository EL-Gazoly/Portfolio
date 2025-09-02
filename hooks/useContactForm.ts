// hooks/useContactForm.ts
"use client";

import { useState } from "react";
import { toast } from "sonner";
import type { ContactFormData } from "@/types";

const initialFormState: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// Function to call your server-side API
async function sendContactForm(formData: ContactFormData) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);

      try {
        const errorJson = JSON.parse(errorText);
        throw new Error(errorJson.error || `Server error: ${response.status}`);
      } catch {
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return false;
    }
    return true;
  };

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      toast.promise(sendContactForm(formData), {
        loading: "Sending message...",
        success: () => {
          resetForm();
          return "Message sent successfully!";
        },
        error: (error) => {
          console.error("Form submission error:", error);
          return error.message || "Failed to send message. Please try again.";
        },
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    updateField,
    resetForm,
    submitForm,
    isSubmitting,
  };
}

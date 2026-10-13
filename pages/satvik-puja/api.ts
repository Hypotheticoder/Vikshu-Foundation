import axios, { AxiosError } from "axios";
import { SatvikPujaFormData } from "./schema";

const API_BASE_URL =
  (import.meta as any).env?.VITE_API_URL || "https://appbackend.vikshufoundation.com";

// Dedicated axios instance for Vikshu API
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
});

// FastAPI backend schema for POST /api/v1/puja-registrations
export interface PujaRegistrationBackendPayload {
  club_name: string;
  club_registration_number: string;
  puja_pandal_name: string;
  contact_person_name: string;
  mobile_number: string;
  email?: string | null;
  pandal_address: string;
  google_maps_link?: string | null;
  declaration_accepted: boolean;
}

// FastAPI backend response for PujaRegistrationResponse
export interface PujaRegistrationBackendResponse {
  id: number;
  registration_number: string;
  club_name: string;
  club_registration_number: string;
  puja_pandal_name: string;
  contact_person_name: string;
  mobile_number: string;
  email?: string | null;
  pandal_address: string;
  google_maps_link?: string | null;
  declaration_accepted: boolean;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  updated_at: string;
}

export interface SubmissionResponse {
  success: boolean;
  message?: string;
  registrationNumber?: string;
  backendRecord?: PujaRegistrationBackendResponse;
  data?: SatvikPujaFormData;
}

/**
 * Transforms frontend camelCase form data to backend snake_case payload
 */
export function mapFormDataToBackend(
  data: SatvikPujaFormData
): PujaRegistrationBackendPayload {
  // Strip whitespace, dashes, and parentheses
  let cleanMobile = (data.mobileNumber || "").trim().replace(/[\s\-\(\)]/g, "");

  // If mobile begins with "+91", strip it
  if (cleanMobile.startsWith("+91")) {
    cleanMobile = cleanMobile.slice(3);
  } else if (cleanMobile.startsWith("91") && cleanMobile.length === 12) {
    cleanMobile = cleanMobile.slice(2);
  }

  // If user entered leading 0 (e.g. 09830012345), strip it so backend regex passes
  if (cleanMobile.startsWith("0")) {
    cleanMobile = cleanMobile.slice(1);
  }

  return {
    club_name: data.clubName.trim(),
    club_registration_number: data.clubRegistrationNumber.trim(),
    puja_pandal_name: data.pandalName.trim(),
    contact_person_name: data.contactPerson.trim(),
    mobile_number: cleanMobile,
    email: data.emailAddress?.trim() ? data.emailAddress.trim() : null,
    pandal_address: data.pandalAddress.trim(),
    google_maps_link: data.mapsLink?.trim() ? data.mapsLink.trim() : null,
    declaration_accepted: data.agreedToRules,
  };
}

/**
 * Submits the registration form using Axios to POST /api/v1/puja-registrations
 */
export async function submitPujaRegistration(
  data: SatvikPujaFormData
): Promise<SubmissionResponse> {
  const payload = mapFormDataToBackend(data);

  try {
    const response = await apiClient.post<PujaRegistrationBackendResponse>(
      "/api/v1/puja-registrations",
      payload
    );

    return {
      success: true,
      message: "Registration submitted and verified successfully!",
      registrationNumber: response.data.registration_number,
      backendRecord: response.data,
      data,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosErr = error as AxiosError<{ detail?: any }>;
      const detail = axiosErr.response?.data?.detail;

      let errorMessage = "Failed to submit registration.";
      if (typeof detail === "string") {
        errorMessage = detail;
      } else if (Array.isArray(detail)) {
        errorMessage = detail.map((d: any) => d.msg || d.message).join(", ");
      } else if (axiosErr.message) {
        errorMessage = axiosErr.message;
      }

      console.error("[PujaRegistration API Error]", errorMessage, error);
      throw new Error(errorMessage);
    }

    throw error;
  }
}

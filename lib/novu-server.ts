import axios from "axios";

export async function triggerNotification({
  workflowTriggerIdentifier,
  subscriberId,
  payload = {},
  email,
  overrides = {},
}: {
  workflowTriggerIdentifier: string;
  subscriberId: string;
  payload?: any;
  email: string;
  overrides?: any;
}) {
  try {
    await axios.post(
      "https://api.novu.co/v1/events/trigger",
      {
        name: workflowTriggerIdentifier,
        to: {
          subscriberId,
          email,
        },
        payload,
        overrides,
      },
      {
        headers: {
          Authorization: `ApiKey ${process.env.NOVU_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return { success: true };
  } catch (error) {
    console.error("Novu notification error:", error);
    return { success: false, error };
  }
}

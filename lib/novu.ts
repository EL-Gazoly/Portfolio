import { Novu } from "@novu/api";

const novu = new Novu({
  secretKey: process.env.NEXT_PUBLIC_NOVU_SECRET_KEY,
});

type NotificationPayload = {
  name: string;
  email: string;
  message: string;
};

export function triggerNotification(payload: NotificationPayload) {
  return novu.trigger({
    to: {
      subscriberId: "68adb588d8e299ea2080a059",
      email: "elgazoly11@gmail.com",
    },
    workflowId: "portfolio",
    payload: {
      name: payload.name,
      email: payload.email,
      message: payload.message,
    },
  });
}

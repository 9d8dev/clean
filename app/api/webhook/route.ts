import crypto from "crypto";

export async function POST(request: Request) {
  const body = await request.json();

  const attendee = body.payload.attendees[0];
  const email = attendee.email;
  const fullName = attendee.name;
  const [firstName, lastName] = fullName.split(" ");

  const hashedEmail = crypto.createHash("sha256").update(email).digest("hex");
  const hashedFirstName = firstName
    ? crypto.createHash("sha256").update(firstName).digest("hex")
    : null;
  const hashedLastName = lastName
    ? crypto.createHash("sha256").update(lastName).digest("hex")
    : null;

  const requestBody = {
    data: [
      {
        event_name: "Schedule",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        user_data: {
          em: [hashedEmail],
          fn: [hashedFirstName],
          ln: [hashedLastName],
        },
      },
    ],
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "Access-Control-Request-Method": "*",
    },
    body: JSON.stringify(requestBody),
  };

  const response = await fetch(
    `https://graph.facebook.com/v20.0/824852226112291/events?access_token=${process.env.FACEBOOK_PIXEL_TOKEN}`,
    requestOptions
  );
  const fbBody = await response.json();

  return new Response(JSON.stringify(fbBody));
}

export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Heard Music",
          email: "heardmusicproductions@gmail.com",
        },
        to: [
          {
            email: "heardmusicproductions@gmail.com",
          },
        ],
        subject: "Stripe Purchase Test",
        htmlContent: `
          <h1>Payment Successful 🔥</h1>
          <p>Webhook working correctly.</p>
        `,
      }),
    });

    const data = await response.json();

    return res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

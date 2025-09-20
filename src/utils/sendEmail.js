// utils/sendEmail.js
export async function sendEmail(event) {
    const zapierWebhookURL = process.env.REACT_APP_ZAPIER_WEBHOOK_URL;
  
    try {
      const response = await fetch(zapierWebhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: event.body,
      });
  
      if (response.ok) {
        console.log("✅ Email request sent successfully!");
      } else {
        console.error("❌ Failed to send email request:", response.statusText);
      }
    } catch (error) {
      console.error("⚠️ Error sending email request:", error);
    }
  }
  
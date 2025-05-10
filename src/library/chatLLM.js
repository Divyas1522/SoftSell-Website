export function getMockResponse(message) {
  const q = message.toLowerCase();

  if (q.includes("sell my license") || q.includes("how do i sell")) {
    return "Of course! To sell your license, head over to your dashboard and click on 'My Licenses'. From there, select the license you want to sell and hit the 'Sell' button.";
  }

  if (q.includes("refund")) {
    return "Refunds are usually processed within 3 to 5 business days after your request is approved. If you haven't received it by then, feel free to reach out to our support team.";
  }

  if (q.includes("transfer") && q.includes("license")) {
    return "Yes, license transfers are possible! Just navigate to 'My Licenses' and select the license you want to transfer. You'll see an option to enter the recipient’s email.";
  }

  if (q.includes("support") || q.includes("contact")) {
    return "You can contact our support team anytime by clicking the 'Help' button in your dashboard or emailing support@softsell.com.";
  }

  return "Hmm, I’m not sure I got that. Could you please rephrase your question?";
}

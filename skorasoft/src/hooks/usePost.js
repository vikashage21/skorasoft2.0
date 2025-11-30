export const userPost = async (formData) => {
  try {
    const res = await fetch("https://skorasoft2-0-2.onrender.com/api/contact", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json(); // <--- YOU MUST parse JSON first

    if (data.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message: " + data.message);
    }

    return data;

  } catch (error) {
    console.error("Fetch error:", error);
    return { success: false, message: "Network error" };
  }
};

import React, { useState } from "react";
import { sendMail } from "../../../api";

export const SendMessage = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    from: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.senderName || !formData.from || !formData.message) {
      showToast("Please fill in all fields.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await sendMail(formData);
      if (response?.status === 200) {
        setFormData({
          senderName: "",
          from: "",
          message: "",
        });
        showToast("Message sent successfully");
      } else {
        showToast("Could not send message. Please try again.");
      }
    } catch (error) {
      showToast("Could not send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  function showToast(message) {
    const toastContainer = document.getElementById("toastContainer");
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.classList.add("customToast");
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 5000);
  }

  return (
    <form className="w-full" method="post" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-7 justify-start items-start mb-5">
        <input
          type="text"
          placeholder="Name"
          name="senderName"
          required
          className="input bg-transparent input-bordered w-full max-w-md"
          onChange={(e) =>
            setFormData({ ...formData, senderName: e.target.value })
          }
          value={formData?.senderName}
        />
        <input
          type="email"
          placeholder="E-mail"
          name="from"
          required
          className="input bg-transparent input-bordered w-full max-w-md"
          onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          value={formData?.from}
        />
        <textarea
          placeholder="Message"
          name="message"
          rows={"5"}
          required
          className="w-full max-w-md px-5 py-4 border border-night-black rounded-lg bg-transparent outline-none"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData?.message}
        ></textarea>
        <div className="w-full flex justify-start items-center">
          <button
            type="submit"
            disabled={isLoading}
            className="py-4 px-7 bg-secondary text-white rounded-full disabled:opacity-60"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};

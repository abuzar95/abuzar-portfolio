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
    setIsLoading(true);
    const response = await sendMail(formData);
    if (response?.status == 200) {
      console.log("success");
      setFormData({
        senderName: "",
        from: "",
        message: "",
      });
      showToast("Message send successfully");
    }
    // End loading
    setIsLoading(false);
  };

  function showToast(message) {
    const toastContainer = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.classList.add("customToast");
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove(); // Remove the toast after a certain duration (e.g., 5 seconds)
    }, 5000);
  }

  return (
    <form className="w-full" method="post" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-7 justify-start items-start mb-5">
        <input
          type="text"
          placeholder="Name"
          name="senderName"
          className="input bg-transparent input-bordered w-full md:max-w-xs"
          onChange={(e) =>
            setFormData({ ...formData, senderName: e.target.value })
          }
          value={formData?.senderName}
        />
        <input
          type="email"
          placeholder="E-mail"
          name="from"
          className="input bg-transparent input-bordered w-full md:max-w-xs"
          onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          value={formData?.from}
        />
        <textarea
          placeholder="Message"
          name="message"
          rows={"5"}
          className="w-full px-5 py-4 border border-night-black md:max-w-xs rounded-lg bg-transparent outline-none  "
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData?.message}
        ></textarea>
        <div className="w-full flex justify-start items-center ">
          <button
            disabled={isLoading}
            className="py-4 px-7 bg-secondary rounded-full"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};

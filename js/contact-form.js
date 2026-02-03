function initContactForm() {
  const form = document.getElementById("contactForm");
  const btn = document.getElementById("submitBtn");
  const toast = document.getElementById("formToast");
  const toastText = document.getElementById("toastText");
  const toastIcon = toast?.querySelector(".toast-icon");

  if (!form || !btn || !toast || !toastText) return;

  let toastTimer;

  function showToast(message, type = "success") {
    clearTimeout(toastTimer);

    toastText.textContent = message;
    toast.classList.remove("is-error");
    if (toastIcon) toastIcon.textContent = "✓";

    if (type === "error") {
      toast.classList.add("is-error");
      if (toastIcon) toastIcon.textContent = "!";
    }

    toast.classList.add("is-visible");

    toastTimer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  function setLoading(isLoading) {
    btn.disabled = isLoading;
    btn.classList.toggle("is-loading", isLoading);
    const label = btn.querySelector(".btn-label");
    if (label) label.textContent = isLoading ? "Sending…" : "Submit";
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Honeypot check (spam bots)
    const honeypot = form.querySelector('input[name="company"]');
    if (honeypot && honeypot.value.trim() !== "") {
      showToast("Thanks! Your message has been sent.", "success");
      form.reset();
      return;
    }

    // Native validity check
    if (!form.checkValidity()) {
      showToast("Please fill in all required fields.", "error");
      form.reportValidity();
      return;
    }

    setLoading(true);

    try {
      const data = new FormData(form);

      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.reset();
        showToast("Thanks! Your message has been sent.", "success");
      } else {
        showToast("Something went wrong. Please try again.", "error");
      }
    } catch {
      showToast("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  });
}

document.addEventListener("DOMContentLoaded", initContactForm);
document.addEventListener("includes:loaded", initContactForm);

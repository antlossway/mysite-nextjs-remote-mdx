"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";

const DialogContactForm = () => {
  function openModal() {
    const modal = document.querySelector("#dialog-contactform");
    modal.showModal();
  }

  function closeModal() {
    const modal = document.querySelector("#dialog-contactform");
    modal.close();
  }

  return (
    <>
      <span
        className=" text-slate-600 dark:text-white/80 underline cursor-pointer
          "
        onClick={openModal}
      >
        quinn[at]unices.org
      </span>
      {/* popup for contact form */}
      <dialog id="dialog-contactform" className="p-0 rounded-md ">
        <div className="relative ">
          <ContactForm />

          {/* close button */}
          <button
            className="absolute top-5 right-5 w-[16px] h-[16px]"
            onClick={closeModal}
          >
            <Image src="/img/close.svg" alt="close" fill />
          </button>
        </div>
      </dialog>
    </>
  );
};

export default DialogContactForm;

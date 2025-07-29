"use client";

import React, { useEffect } from "react";
import Modal from "react-modal";
import UnderBustCupJpg from "../assets/underbustcup.jpg";
import OverBustCupJpg from "../assets/overbust-cup.jpg";
import Image from "next/image";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string | React.ReactNode;
}

const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  // Set up modal accessibility
  useEffect(() => {
    if (typeof window !== "undefined") {
      const appElement = document.getElementById("__next") || document.body;
      Modal.setAppElement(appElement);
    }
  }, []);

  // Determine which image to show based on title
  const showBandMeasurement = title.toLowerCase().includes("band");

  // Custom styles for the modal
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(1px)",
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "95%",
      maxWidth: "32rem",
      padding: 0,
      border: "none",
      borderRadius: "0.75rem",
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      overflow: "hidden",
    },
  };

  // Add custom CSS to ensure modal title has no margin
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement("style");
    // Add CSS rule to remove margin from modal title
    styleElement.innerHTML = `
      .modal-title-no-margin {
        margin: 0 !important;
        padding: 0;
        line-height: 1.2;
      }
    `;
    // Append the style element to the document head
    document.head.appendChild(styleElement);

    // Clean up function to remove the style element when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={title}
      closeTimeoutMS={0}
    >
      {/* Modal header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 flex justify-between items-center relative">
        <h3 className="text-2xl font-semibold text-white text-start flex-grow modal-title-no-margin">
          {title}
        </h3>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 focus:outline-none bg-yellow-600 rounded-full p-1 flex items-center justify-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Modal content with image first, then text */}
      <div className="p-5 sm:p-6">
        {/* Image section */}
        <div className="w-full flex justify-center items-center mb-5">
          <div className="relative w-full h-40 sm:h-44 flex justify-center">
            <Image
              src={showBandMeasurement ? UnderBustCupJpg : OverBustCupJpg}
              alt={
                showBandMeasurement ? "Band Measurement" : "Bust Measurement"
              }
              width={160}
              height={160}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Text content section */}
        <div className="w-full">
          <div className="text-gray-700 text-lg">{content}</div>
        </div>
      </div>
    </Modal>
  );
};

export default InfoModal;

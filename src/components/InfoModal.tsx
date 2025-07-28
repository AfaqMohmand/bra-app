"use client";

import React, { useEffect } from "react";
import Modal from "react-modal";
import UnderBustCupSvg from "../assets/underbust-cup.svg";
import OverBustCupSvg from "../assets/overbust-cup.svg";
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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={title}
      closeTimeoutMS={0}
    >
      {/* Modal header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 flex justify-center items-center relative">
        <h3 className="text-2xl font-semibold text-white text-center">
          {title}
        </h3>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 focus:outline-none absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-600 rounded-full p-1"
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
              src={showBandMeasurement ? UnderBustCupSvg : OverBustCupSvg}
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

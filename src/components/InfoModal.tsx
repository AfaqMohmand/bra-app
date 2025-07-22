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
      width: "90%",
      maxWidth: "28rem",
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
      closeTimeoutMS={300}
    >
      {/* Modal header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4 flex justify-between items-center">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 focus:outline-none ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

      {/* Modal content with two columns */}
      <div className="p-3 sm:p-4">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
          {/* Left column with image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full h-28 sm:h-32 flex justify-center">
              <Image
                src={showBandMeasurement ? UnderBustCupSvg : OverBustCupSvg}
                alt={
                  showBandMeasurement ? "Band Measurement" : "Bust Measurement"
                }
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Right column with content */}
          <div className="w-full md:w-1/2">
            <div className="text-gray-700 text-sm">{content}</div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default InfoModal;

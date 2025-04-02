import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = () => {
  const qrCodeScannerRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText, decodedResult) => {
        // Handle the result here
        console.log("QR Code Scanned:", decodedText);
        alert(`Scanned Code: ${decodedText}`);
      },
      (error) => {
        console.warn("Error scanning QR Code:", error);
      }
    );

    // Cleanup on component unmount
    qrCodeScannerRef.current = scanner;
    return () => {
      if (qrCodeScannerRef.current) {
        qrCodeScannerRef.current.clear();
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>QR Code Scanner</h1>
      <div id="qr-reader" style={{ width: "500px", margin: "0 auto" }}></div>
    </div>
  );
};

export default QRScanner;

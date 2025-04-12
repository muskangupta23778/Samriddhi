import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const Hospitals = () => {
  const qrCodeScannerRef = useRef(null);



  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      Hospitals
    </div>
  );
};

export default Hospitals;

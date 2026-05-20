import { useState } from 'react';
import QRCode from 'qrcode';
import styles from './QrDownloadFab.module.css';

interface QrDownloadFabProps {
  label: string;
  color: string;
}

const exportQrImage = async (url: string, label: string, color: string) => {
  const qrCanvas = document.createElement('canvas');
  await QRCode.toCanvas(qrCanvas, url, {
    width: 760,
    margin: 2,
    color: {
      dark: color,
      light: '#FFFFFF',
    },
  });

  const size = 1024;
  const exportCanvas = document.createElement('canvas');
  exportCanvas.width = size;
  exportCanvas.height = size;
  const ctx = exportCanvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, size, size);

  const qrSize = 720;
  const qrX = (size - qrSize) / 2;
  const qrY = 120;
  ctx.drawImage(qrCanvas, qrX, qrY, qrSize, qrSize);

  if ('fonts' in document) {
    await document.fonts.load('64px "Great Vibes"');
  }
  ctx.fillStyle = color;
  ctx.font = '400 76px "Great Vibes", "Brush Script MT", cursive';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, size / 2, 910);

  const fileName = `${label.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'qr'}-qr.png`;
  const link = document.createElement('a');
  link.href = exportCanvas.toDataURL('image/png');
  link.download = fileName;
  link.click();
};

export const QrDownloadFab = ({ label, color }: QrDownloadFabProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await exportQrImage(window.location.href, label, color);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={styles.fab}
      style={{ ['--qr-fab-color' as string]: color }}
      disabled={isDownloading}
      aria-label={`Download QR for ${label}`}
      title={`Download QR for ${label}`}
    >
      <span className={styles.icon} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" role="img" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="15" y="3" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="3" y="15" width="6" height="6" rx="1" fill="currentColor" />
          <rect x="15" y="15" width="2.6" height="2.6" rx="0.5" fill="currentColor" />
          <rect x="18.4" y="15" width="2.6" height="2.6" rx="0.5" fill="currentColor" />
          <rect x="15" y="18.4" width="2.6" height="2.6" rx="0.5" fill="currentColor" />
          <rect x="18.4" y="18.4" width="2.6" height="2.6" rx="0.5" fill="currentColor" />
        </svg>
      </span>
    </button>
  );
};

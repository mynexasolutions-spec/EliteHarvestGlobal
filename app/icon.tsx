import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), 'public', 'assets', 'images', 'logo-removebg-preview.png'));
  const logoSource = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
          border: '2px solid #c78b37',
          borderRadius: '50%',
          background: '#f7f4ed',
        }}
      >
        <img
          alt="Elite Harvest Global"
          src={logoSource}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.32)' }}
        />
      </div>
    ),
    size,
  );
}

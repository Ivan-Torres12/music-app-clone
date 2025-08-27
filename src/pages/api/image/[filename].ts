export const prerender = false;

import type { APIRoute } from 'astro';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async ({ params, request, url }) => {
  const filename = params.filename!;
  const imagePath = path.resolve(`./public/uploads/${filename}`);

  if (!fs.existsSync(imagePath)) {
    return new Response('Image not found', { status: 404 });
  }

  const isPlaceholder = url.searchParams.get("placeholder") === "true";

  try {
    const image = sharp(imagePath);

    // 👉 Si piden el placeholder devolvemos solo un base64 pequeño
    if (isPlaceholder) {
      const placeholderBuffer = await image.resize(20).blur().toBuffer();
      const base64 = `data:image/jpeg;base64,${placeholderBuffer.toString("base64")}`;
      return new Response(JSON.stringify({ placeholder: base64 }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // 👉 Imagen normal (webp si soporta)
    const accept = request.headers.get('accept') || '';
    const supportsWebP = accept.includes('image/webp');

    let buffer: Buffer;
    let contentType: string;

    if (supportsWebP) {
      buffer = await image.webp({ quality: 80 }).toBuffer();
      contentType = 'image/webp';
    } else {
      const ext = path.extname(filename).toLowerCase();
      if (ext === '.png') {
        buffer = await image.png().toBuffer();
        contentType = 'image/png';
      } else if (ext === '.gif') {
        buffer = await image.gif().toBuffer();
        contentType = 'image/gif';
      } else {
        buffer = await image.jpeg({ quality: 90 }).toBuffer();
        contentType = 'image/jpeg';
      }
    }

    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (err) {
    return new Response('Error procesando la imagen', { status: 500 });
  }
};

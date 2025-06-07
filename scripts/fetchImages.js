// scripts/fetchImages.js
import fs from "fs";
import path from "path";
import axios from "axios";
import sharp from "sharp";

// --- Replace with your own list of product images ---
const products = [
  {
    name: "Modern Table Lamp",
    url: "https://images.unsplash.com/photo-1640781957674-62b5412fb57b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Wall Light Fixture",
    url: "https://images.unsplash.com/photo-1547782211-28b5d594ee92?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Minimal Floor Lamp",
    url: "https://images.unsplash.com/photo-1572017791834-6894ae06a6ac?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "LED Pendant Light",
    url: "https://imgs.search.brave.com/-4t3VLzrN0KQptqSQbw4U39mch2z_FtesMjOM0wMEHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzdGluYXRpb25s/aWdodGluZy5jb20v/aW1hZ2VzL3Byb2R1/Y3RzX2R0bC80MTAv/UDI3MDY0MTB-ZHRs/LmpwZw",
  },
  {
    name: "Smart Ceiling Light",
    url: "https://plus.unsplash.com/premium_photo-1683121244207-1f33c216b32b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Vintage Edison Lamp",
    url: "https://imgs.search.brave.com/cMw-K32Pl5J5oRFYVEWDBTTQx2ZuYS7NOBl9TPoJYxg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzQzLzQ5LzUz/LzM2MF9GXzg0MzQ5/NTM0Nl9FUG5MTzNI/RUxmYjl5T0t1Uk0x/WDJ2dmRtU2VXb2I1/ai5qcGc",
  },
];

const outputDir = path.resolve("public", "img");

async function downloadAndConvert({ name, url }) {
  const filename = name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".webp";
  const outPath = path.join(outputDir, filename);

  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    await sharp(response.data)
      .webp({ quality: 80 })
      .toFile(outPath);
    console.log(`✅ Saved ${filename}`);
  } catch (err) {
    console.error(`❌ Failed to download ${name}:`, err.message);
  }
}

async function run() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("📥 Downloading images and converting to .webp...");
  for (const product of products) {
    await downloadAndConvert(product);
  }
  console.log("🎉 All images saved to /public/img/");
}

run();

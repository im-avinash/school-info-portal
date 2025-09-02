import formidable from "formidable";
import fs from "fs";
import path from "path";
import { connectDB } from "@/lib/db";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const db = await connectDB();

  if (req.method === "POST") {
    const form = formidable({
      multiples: false,
      uploadDir: path.join(process.cwd(), "public/schoolImages"),
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "File upload failed" });
      }

      // Check if a file was uploaded
      if (!files.image) {
        return res.status(400).json({ error: "No image uploaded" });
      }

      const { name, address, city, state, contact, email_id } = fields;
      
      // Now it's safe to get the filepath
      const imagePath = "/schoolImages/" + path.basename(files.image[0].filepath);

      await db.query(
        "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name, address, city, state, contact, imagePath, email_id]
      );

      res.status(201).json({ message: "School added successfully" });
    });
  } else if (req.method === "GET") {
    try {
      const [rows] = await db.query("SELECT id, name, address, city, image FROM schools");
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch schools" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // In a real application, you would:
      // 1. Send email using nodemailer
      // 2. Save to database
      // 3. Send confirmation email
      
      // For now, we'll just log the message
      console.log(`Contact form submission:
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `);

      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", async (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "Shivay Updated CV_1752418656050.pdf");
      
      if (fs.existsSync(resumePath)) {
        res.setHeader('Content-Disposition', 'attachment; filename="Shivay_Mehra_Resume.pdf"');
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        
        const fileStream = fs.createReadStream(resumePath);
        fileStream.pipe(res);
      } else {
        res.status(404).json({ error: "Resume not found" });
      }
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Profile image endpoint
  app.get("/api/dp.png", async (req, res) => {
    try {
      const dpPath = path.join(process.cwd(), "attached_assets", "dp.png");
      
      if (fs.existsSync(dpPath)) {
        res.sendFile(dpPath);
      } else {
        res.status(404).json({ error: "Profile image not found" });
      }
    } catch (error) {
      console.error("Profile image error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Logo endpoints
  app.get("/api/birla-logo.png", async (req, res) => {
    try {
      const logoPath = path.join(process.cwd(), "attached_assets", "birla-logo.png");
      
      if (fs.existsSync(logoPath)) {
        res.sendFile(logoPath);
      } else {
        res.status(404).json({ error: "Birla logo not found" });
      }
    } catch (error) {
      console.error("Birla logo error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/adg-logo.png", async (req, res) => {
    try {
      const logoPath = path.join(process.cwd(), "attached_assets", "adg-logo.png");
      
      if (fs.existsSync(logoPath)) {
        res.sendFile(logoPath);
      } else {
        res.status(404).json({ error: "ADG logo not found" });
      }
    } catch (error) {
      console.error("ADG logo error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/iit-logo.jpeg", async (req, res) => {
    try {
      const logoPath = path.join(process.cwd(), "attached_assets", "iit_1752417892853.jpeg");
      
      if (fs.existsSync(logoPath)) {
        res.sendFile(logoPath);
      } else {
        res.status(404).json({ error: "IIT logo not found" });
      }
    } catch (error) {
      console.error("IIT logo error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/spyne-logo.png", async (req, res) => {
    try {
      const logoPath = path.join(process.cwd(), "attached_assets", "spyne_1752418063330.png");
      
      if (fs.existsSync(logoPath)) {
        res.sendFile(logoPath);
      } else {
        res.status(404).json({ error: "Spyne logo not found" });
      }
    } catch (error) {
      console.error("Spyne logo error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/writory-bg.png", async (req, res) => {
    try {
      const bgPath = path.join(process.cwd(), "attached_assets", "writory-bg.png");
      
      if (fs.existsSync(bgPath)) {
        res.sendFile(bgPath);
      } else {
        res.status(404).json({ error: "Writory background not found" });
      }
    } catch (error) {
      console.error("Writory background error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/stock-bg.png", async (req, res) => {
    try {
      const bgPath = path.join(process.cwd(), "attached_assets", "stock-bg.svg");
      
      if (fs.existsSync(bgPath)) {
        res.sendFile(bgPath);
      } else {
        res.status(404).json({ error: "Stock background not found" });
      }
    } catch (error) {
      console.error("Stock background error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

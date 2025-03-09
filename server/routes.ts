import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { waitlistFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate incoming data
      const result = waitlistFormSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
      }
      
      const data = result.data;
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(data.email);
      
      if (existingEntry) {
        return res.status(409).json({ 
          message: "Email already registered in the waitlist" 
        });
      }
      
      // Create entry
      const entry = await storage.createWaitlistEntry(data);
      
      return res.status(201).json({
        message: "Successfully joined the waitlist",
        entry
      });
    } catch (error: any) {
      console.error("Error in waitlist submission:", error);
      return res.status(500).json({ 
        message: "Server error while processing your request" 
      });
    }
  });

  // Get waitlist count
  app.get("/api/waitlist/count", async (req, res) => {
    try {
      const count = await storage.getWaitlistEntriesCount();
      return res.status(200).json({ count });
    } catch (error) {
      console.error("Error getting waitlist count:", error);
      return res.status(500).json({ 
        message: "Server error while fetching waitlist count" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

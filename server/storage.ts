import { users, type User, type InsertUser, waitlistEntries, type WaitlistEntry, type InsertWaitlistEntry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist methods
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  getWaitlistEntriesCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, WaitlistEntry>;
  currentId: number;
  currentWaitlistId: number;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.currentId = 1;
    this.currentWaitlistId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Waitlist methods
  async createWaitlistEntry(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const id = this.currentWaitlistId++;
    const createdAt = new Date().toISOString();
    // Ensure interest and newsletter are properly set to match WaitlistEntry type
    const entry: WaitlistEntry = { 
      ...insertEntry, 
      id, 
      createdAt,
      interest: insertEntry.interest ?? null,
      newsletter: insertEntry.newsletter ?? null
    };
    this.waitlist.set(id, entry);
    return entry;
  }

  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlist.values());
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    return Array.from(this.waitlist.values()).find(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );
  }

  async getWaitlistEntriesCount(): Promise<number> {
    return this.waitlist.size;
  }
}

export const storage = new MemStorage();

// Initialize with some entries for display purposes
(async () => {
  // Only add if the waitlist is empty
  if ((await storage.getWaitlistEntriesCount()) === 0) {
    for (let i = 0; i < 230; i++) {
      await storage.createWaitlistEntry({
        name: "Example User",
        email: `example${i}@example.com`,
        interest: null,
        newsletter: true
      });
    }
  }
})();

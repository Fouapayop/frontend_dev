export type MemberRecord = {
  id: string;
  name: string;
  prenom: string;
  email: string;
  level: "Moyen" | "Élevé" | "Basse";
};

export const demoMembers: MemberRecord[] = [
  { id: "1", name: "Alice", prenom: "Alice", email: "alice@example.com", level: "Moyen" },
  { id: "2", name: "Bob", prenom: "Bob", email: "bob@example.com", level: "Élevé" },
  { id: "3", name: "Charlie", prenom: "Charlie", email: "charlie@example.com", level: "Basse" },
  { id: "4", name: "Alice", prenom: "Alice", email: "alice@example.com", level: "Moyen" },
  { id: "5", name: "Bob", prenom: "Bob", email: "bob@example.com", level: "Élevé" },
  { id: "6", name: "Charlie", prenom: "Charlie", email: "charlie@example.com", level: "Basse" },
  { id: "7", name: "Alice", prenom: "Alice", email: "alice@example.com", level: "Moyen" },
  { id: "8", name: "Bob", prenom: "Bob", email: "bob@example.com", level: "Élevé" },
  { id: "9", name: "Charlie", prenom: "Charlie", email: "charlie@example.com", level: "Basse" },
  { id: "10", name: "Alice", prenom: "Alice", email: "alice@example.com", level: "Moyen" },
  { id: "11", name: "Bob", prenom: "Bob", email: "bob@example.com", level: "Élevé" },
  { id: "12", name: "Charlie", prenom: "Charlie", email: "charlie@example.com", level: "Basse" },
  { id: "13", name: "Alice", prenom: "Alice", email: "alice@example.com", level: "Moyen" },
  { id: "14", name: "Bob", prenom: "Bob", email: "bob@example.com", level: "Élevé" },
  { id: "15", name: "Charlie", prenom: "Charlie", email: "charlie@example.com", level: "Basse" },
];

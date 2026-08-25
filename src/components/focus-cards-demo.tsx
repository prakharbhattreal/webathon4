import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const cards = [
    {
      title: "Steve Jobs",
      specialization:"Tech Entrepreneur",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Edwin Dev",
      specialization:"Market Specialist",
      src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bob",
      specialization:"Tech Entrepreneur",
      src: "https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Alice",
      specialization:"AI ML specialist",
      src: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Keaini",
      specialization:"Entrepreneur",
      src: "https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Adam son",
      specialization:"Tech Entrepreneur",
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <FocusCards cards={cards} />;
}

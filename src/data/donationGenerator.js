export const generateDonation = () => {
  const names = ["Astha", "Rohit", "Karan", "Ruchita","Sneha", "Mehul", "Pooja", "Jhanvi", "Harsha"];
  const amounts = [100, 500, 1000, 1500, 2000, 2500, 3000, 4000, 5000];

  return {
    id: crypto.randomUUID(),
    name: names[Math.floor(Math.random() * names.length)],
    amount: amounts[Math.floor(Math.random() * amounts.length)],
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  };
};

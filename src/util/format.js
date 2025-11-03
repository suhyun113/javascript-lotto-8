export const formatTicket = (numbers) => `[${numbers.join(", ")}]`;

export const formatRate = (value) => {
  const rounded = Math.round(value * 10) / 10;
  return `${rounded}%`;
};

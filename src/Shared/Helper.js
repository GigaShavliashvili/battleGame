export const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const Attack = ({ attacker, reciver }) => {
  const damage = attacker.attack + (attacker.level - reciver.level) * 1.25;
  let finalDamage = damage - reciver.defense / 2;
  if (finalDamage < 10) {
    finalDamage = 10;
  }
  return finalDamage;
};

export const Magic = ({ attacker, reciver }) => {
  const damage = attacker.magic + (attacker.level - reciver.level) * 1.25;
  let finalDamage = damage - reciver.defense / 2;
  if (finalDamage < 10) {
    finalDamage = 10;
  }
  return finalDamage;
};

export const Heal = ({ reciver }) => {
  return reciver.magic + reciver.level * 0.25;
};

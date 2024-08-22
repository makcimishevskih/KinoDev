const capitalize = (str: string): string => {
   if (!str) return "";
   return [...str[0].toUpperCase(), str.slice(1)].join("").trim();
};

const formatBudgetToUSD = (value: number = 0, currency = "USD") => {
   return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      maximumSignificantDigits: Math.trunc(Math.abs(value)).toFixed().length,
   })
      .format(value || 0)
      .split(",")
      .join(" ");
};

const formatShort = (value: number = 0): string => {
   const formats: Record<string, string> = {
      M: "млн",
   };

   const res = new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
   }).format(value);

   const lastElem: string = formats[res[res.length - 1]];

   return `${res.slice(0, res.length - 1)}${lastElem}`;
};

function formatDate(date: Date | string): {
   day: number;
   month: string;
   year: number;
} {
   if (!date) {
      return {
         day: 0,
         month: "",
         year: 0,
      };
   }
   const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
   ];
   const d = new Date(date);
   const day = d.getDay();
   const month = months[d.getMonth()];
   const year = d.getFullYear();

   return { day, month, year };
}

const cutZero = (str: string) => (str[0] === "0" ? str.slice(1) : str);

const getActorYears = (years: number): number =>
   new Date().getFullYear() - years;

export {
   capitalize,
   formatBudgetToUSD,
   formatShort,
   cutZero,
   formatDate,
   getActorYears,
};

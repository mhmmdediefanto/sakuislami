import React from "react";

const CardService = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow p-6 flex flex-col gap-2 border-t-4 border-emerald-300 font-quicksand">
      <h3 className="text-xl font-bold text-emerald-400 dark:text-emerald-100">
        {title}
      </h3>
      <ul className="list-disc ml-5 text-sm">{children}</ul>
    </div>
  );
};

export default CardService;

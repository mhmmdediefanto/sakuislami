// import { Doa } from "@/types/DoaTypes";
import Link from "next/link";
import React from "react";


const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" font-quicksand rounded-lg border bg-card text-card-foreground shadow-sm border-l-4 border-l-emerald-500 hover:shadow-lg transition-shadow">
      {children}
    </div>
  );
};

const CardHeader = ({ title, grup }: { title: string; grup: string }) => {
  return (
    <div className="flex flex-col space-y-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 p-3 md:p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="tracking-tight text-base md:text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
            {title}
          </h3>
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs">
            {grup}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardFooter = ({ id }: { id: string }) => {
  return (
    <>
      <div className="flex gap-2 pt-2 px-4 pb-4">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex-1"
          href={`/doa/${id}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-open-text h-4 w-4 mr-2"
          >
            <path d="M12 7v14"></path>
            <path d="M16 12h2"></path>
            <path d="M16 8h2"></path>
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            <path d="M6 12h2"></path>
            <path d="M6 8h2"></path>
          </svg>
          Baca
        </Link>
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-share2 h-4 w-4"
          >
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
          </svg>
        </button>
      </div>
    </>
  );
};

const CardContent = ({
  tentang,
  children,
}: {
  tentang: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="p-3 md:p-6 space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-3">{tentang}</p>
        <div className="flex flex-wrap gap-1">{children}</div>
      </div>
    </>
  );
};

const CardContentTag = ({  children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-900 text-secondary-foreground hover:bg-secondary/80 text-xs">
        {children}
      </div>
    </>
  );
};


export const CardDoa = {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
  CardContentTag,
};

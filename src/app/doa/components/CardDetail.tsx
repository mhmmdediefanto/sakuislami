import React from "react";

const CardDetailTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={`font-semibold text-sm md:text-lg flex items-center gap-2 ${className}`}
    >
      {children}    </p>
  );
};

const CardDetailContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-[12px] ${className}`}>{children}</p>;
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-5 md:my-5 my-3">{children}</div>;
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={` p-5 rounded-lg ${className}`}>{children}</div>;
};

const CardDetail = {
  Card,
  CardDetailTitle,
  CardContent,
  CardDetailContent,
};

export default CardDetail;

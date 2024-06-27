import React from "react";

export interface IMenuItemProps {
  title: string;
  href: string;
}

export interface IPageProps {
  title: string;
  children: React.ReactNode;
}

export interface IParagraphProps {
  text: string;
}

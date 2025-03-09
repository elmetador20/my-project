import { SVGProps } from "react";

export default function TelescopeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-primary"
      {...props}
    >
      <path d="M14.5 16.5 18 21"></path>
      <path d="M9.5 14 3 6m0 0 7 3.5m0 0 8 9.5"></path>
      <path d="m12 13-3-6.5 6 2.5"></path>
    </svg>
  );
}

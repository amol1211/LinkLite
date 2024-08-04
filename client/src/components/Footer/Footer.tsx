import * as React from "react";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-900 text-base text-white text-center py-5">
      Copyright &#169; 2023-2030 | Crafted with &#129293; by Amol.
    </div>
  );
};

export default Footer;

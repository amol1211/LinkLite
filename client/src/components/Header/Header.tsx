import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="bg-slate-900">
      <div className="container p-2 mx-auto">
        <nav className="py-5">
          <div className="text-3xl text-white text-center font-semibold ">
            LinkLite - The URL Shortener
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link, useLocation, useParams } from "react-router-dom";

const BreadCrumb = ({ data: breadCrumbData }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="flex items-center gap-2">
        {breadCrumbData?.length > 0 &&
          breadCrumbData?.map((data, index) => (
            <div
              key={data?.id}
              className={`flex items-center gap-1 font-semibold ${
                data?.link === pathname ? "text-blue-500" : "text-black"
              }`}
            >
              <Link to={data?.link} className="text-sm">
                {data?.name}
              </Link>
              {index < breadCrumbData?.length - 1 && (
                <RxDoubleArrowRight className="text-2xl" />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default BreadCrumb;

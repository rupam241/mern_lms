import React from "react";
import CourseContainer from "../ComponentMain.jsx/CourseContainer";

function Courses() {
  const isLoading = false;;
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-10">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => {
              return <CourseSkeleton key={index} />;
            })
          ) : (
            <>
              <CourseContainer />
              
              
              
              </>
              
          
            
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      {/* Image Placeholder */}
      <div className="w-full h-36 bg-gray-200" />

      <div className="px-5 py-4 space-y-3">
        {/* Title Placeholder */}
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Profile Picture Placeholder */}
            <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            {/* Name Placeholder */}
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </div>
          {/* Time Placeholder */}
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>

        {/* Additional Info Placeholder */}
        <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

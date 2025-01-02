import CourseContainer from "@/ComponentMain.jsx/CourseContainer";
import React from "react";

const MyLearning = () => {
  const isLoading = false;
  return (
    <div className="  max-w-4xl mx-auto my-10 p-4 md:px-0 ">
      <h1 className="font-bold text-2xl">MY LEARNING</h1>
      <div className="my-5">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           <CourseContainer/>
           <CourseContainer/>
           <CourseContainer/>
           <CourseContainer/>
           <CourseContainer/>
           <CourseContainer/>
           <CourseContainer/>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;

const MyLearningSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-300 dark:bg-gray-700 rounded-lg h-40 animate-pulse"
      ></div>
    ))}
  </div>
);

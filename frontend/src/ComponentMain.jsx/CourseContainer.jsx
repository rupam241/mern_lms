import React from "react";
import { FaRupeeSign } from "react-icons/fa";

function CourseContainer({ courses }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 hover:translate-y-1 duration-300">
      <img
        src="https://cdn.pixabay.com/photo/2018/02/27/10/49/training-3185170_1280.jpg"
        alt="Course Image"
        className="w-full h-36 object-cover rounded-t-lg"
      />

      <div className="p-6 flex flex-col gap-2">
        <h3 className="font-bold text-xl hover:underline truncate cursor-pointer">
          This is a CSS course
        </h3>

        {/* Instructor details */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
              alt=""
              className="w-8 h-8 rounded-full object-cover"
            />
            <h1 className="font-medium text-sm">Rupam Dey</h1>
          </div>

          <div className="bg-indigo-700 py-1 px-3 rounded-xl text-white hover:text-black hover:bg-gray-300">
            <span>Beginner</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm ">
          This is a brief description of the course. Learn valuable skills and
          knowledge in an engaging format.
        </p>

        {/* price for course */}

        <div className="flex items-center ">
          <FaRupeeSign />

          <span className="font-semibold">139</span>
        </div>

        <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default CourseContainer;
